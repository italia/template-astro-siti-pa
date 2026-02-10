import type { SearchResult } from "@graphql/types";
import { Client } from "@opensearch-project/opensearch";
import type { Search_RequestBody } from "@opensearch-project/opensearch/api/index.js";
import type { APIRoute } from "astro";
import * as https from "https";

export const prerender = false;

const HOST = import.meta.env.OPENSEARCH_HOST;
const USERNAME = import.meta.env.OPENSEARCH_USERNAME;
const PASSWORD = import.meta.env.OPENSEARCH_PASSWORD;
const INDEX_NAME_PREFIX = import.meta.env.OPENSEARCH_INDEX_NAME;
const isProduction = import.meta.env.NODE_ENV === "production";

if (!HOST || !USERNAME || !PASSWORD || !INDEX_NAME_PREFIX) {
  throw new Error(
    "Missing OpenSearch environment variables (HOST, USERNAME, PASSWORD, INDEX_NAME_PREFIX).",
  );
}

const client = new Client({
  node: HOST,
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
  ...(isProduction && {
    agent: new https.Agent({ rejectUnauthorized: false }),
  }),
});

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get("query");
  const lang = url.searchParams.get("lang");
  const INDEX_NAME = INDEX_NAME_PREFIX + lang;

  if (!query || query.trim().length < 2) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
  const searchBody: Search_RequestBody = {
    query: {
      multi_match: {
        query: query,
        fields: ["title^3", "description^2", "content"],
        type: "best_fields",
      },
    },
    highlight: {
      fields: {
        content: {
          fragment_size: 150,
          number_of_fragments: 1,
          pre_tags: [""],
          post_tags: [""],
        },
      },
    },
  };

  try {
    const response = await client.search({
      index: INDEX_NAME,
      body: searchBody,
    });

    const results: SearchResult[] = response.body.hits.hits.map((hit: any) => {
      const highlightSnippet = hit.highlight?.content?.[0];
      return {
        id: hit._id,
        title: hit._source.title,
        description: highlightSnippet || hit._source.description,
        internalLink: hit._source.internalLink,
        externalLink: hit._source.externalLink,
        downloadLink: hit._source.downloadLink,
        type: hit._source.type,
        category: hit._source.category,
        isHighlighted: !!highlightSnippet,
      };
    });

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(
      `Error during search on OpenSearch (Index ${INDEX_NAME}):`,
      (error as Error).message,
    );

    return new Response(
      JSON.stringify({
        error: "Internal server error during search.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
