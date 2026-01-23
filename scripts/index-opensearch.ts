import { LocaleLabelsQuery } from "@graphql/query/indexing";
import type { Document, SiteLocale } from "@graphql/types";
import { executeQuery } from "@lib/datocms";
import { Client } from "@opensearch-project/opensearch";
import * as fs from "fs";
import { existsSync } from "node:fs";
import * as path from "path";

import dotenv from "dotenv";

const mode = process.argv[2];

if (!mode) {
  console.error(
    "Usage: bun run ./scripts/index-opensearch.ts <staging|production>",
    process.argv,
  );
  process.exit(1);
}

const envFile = `.env.${mode}`;
if (!existsSync(envFile)) {
  console.error(`Missing env file: ${envFile}`);
}

dotenv.config({ path: envFile, override: true });

const HOST = import.meta.env.OPENSEARCH_HOST;
const USERNAME = import.meta.env.OPENSEARCH_USERNAME;
const PASSWORD = import.meta.env.OPENSEARCH_PASSWORD;
const INDEX_NAME_PREFIX = import.meta.env.OPENSEARCH_INDEX_NAME;
const CONTENT_PATH = path.join(process.cwd(), "dist", "client", "indexing");

if (!HOST || !USERNAME || !PASSWORD || !CONTENT_PATH || !INDEX_NAME_PREFIX) {
  throw new Error(
    "Missing environment variables for OpenSearch (HOST, USERNAME, PASSWORD, CONTENT_PATH, INDEX_NAME_PREFIX).",
  );
}

const client = new Client({
  node: HOST,
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
});

function getBulkBody(documents: Document[], INDEX_NAME: string) {
  return documents.flatMap((doc) => [
    { index: { _index: INDEX_NAME, _id: doc.slug } },
    doc,
  ]);
}

async function runIndexing() {
  if (!fs.existsSync(CONTENT_PATH)) {
    console.error(
      `Error: Content file not found at ${CONTENT_PATH}. Please make sure to run 'astro build'.`,
    );
    return;
  }
  const files = fs.readdirSync(CONTENT_PATH);

  for (const file of files) {
    const lang = file.split(".")[0] as SiteLocale;

    const mappingLanguage = await executeQuery(LocaleLabelsQuery, {
      variables: { locale: lang },
    });

    const INDEX_NAME = INDEX_NAME_PREFIX + lang;

    console.log(`Starting indexing on ${HOST}/${INDEX_NAME}`);

    const rawContent = fs.readFileSync(path.join(CONTENT_PATH, file), "utf8");
    const documents = JSON.parse(rawContent);

    if (documents.length === 0) {
      console.log("No documents to index. Skipping operation.");
      return;
    }

    try {
      await client.indices.delete({
        index: INDEX_NAME,
        ignore_unavailable: true,
      });
      console.log(`Index '${INDEX_NAME}' deleted (if existed).`);

      await client.indices.create({
        index: INDEX_NAME,
        body: {
          settings: {
            number_of_shards: 1,
            number_of_replicas: 0,
          },
          mappings: {
            properties: {
              title: {
                type: "text",
                analyzer: mappingLanguage?.lang?.analyzer,
              },
              content: {
                type: "text",
                analyzer: mappingLanguage?.lang?.analyzer,
              },
              url: { type: "keyword" },
            },
          },
        },
      });
      console.log(`Index '${INDEX_NAME}' created.`);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        errorMessage = (error as { message: string }).message;
      }
      console.error("Error creating/deleting index:", errorMessage);
    }

    try {
      const bulkResponse = await client.bulk({
        body: getBulkBody(documents, INDEX_NAME),
      });

      if (bulkResponse.body.errors) {
        console.error(
          "Error during BULK indexing. Some documents may not have been indexed.",
        );
      } else {
        console.log(
          `Indexing completed! ${documents.length} documents indexed.`,
        );
      }
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        errorMessage = (error as { message: string }).message;
      }
      console.error("Error during BULK operation:", errorMessage);
    }
  }
}

runIndexing();
