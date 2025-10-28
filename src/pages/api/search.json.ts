import type { APIRoute } from "astro";
import { Client } from "@opensearch-project/opensearch";
import * as https from "https"; // Necessario per la gestione SSL
import type { Search_RequestBody } from "@opensearch-project/opensearch/api/index.js";
import type { SearchResult } from "../../graphql/types";

export const prerender = false;

const HOST = import.meta.env.OPENSEARCH_HOST;
const USERNAME = import.meta.env.OPENSEARCH_USERNAME;
const PASSWORD = import.meta.env.OPENSEARCH_PASSWORD;
const INDEX_NAME = import.meta.env.OPENSEARCH_INDEX_NAME;

if (!HOST || !USERNAME || !PASSWORD || !INDEX_NAME) {
  throw new Error(
    "Mancano le variabili d'ambiente di OpenSearch (HOST, USERNAME, PASSWORD, INDEX_NAME).",
  );
}

const client = new Client({
  node: HOST,
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
  agent: new https.Agent({ rejectUnauthorized: false }),
});

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get("query");

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
  };

  try {
    const response = await client.search({
      index: INDEX_NAME,
      body: searchBody,
    });

    const results: SearchResult[] = response.body.hits.hits.map((hit: any) => ({
      title: hit._source.title,
      description: hit._source.description,
      url: hit._source.url,
      slug: hit._source.slug,
      id: hit._id,
    }));

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(
      `Errore di ricerca su OpenSearch (Indice ${INDEX_NAME}):`,
      (error as Error).message,
    );

    return new Response(
      JSON.stringify({
        error: "Errore interno del server durante la ricerca.",
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
