import { Client } from "@opensearch-project/opensearch";
import * as fs from "fs";
import * as path from "path";
import type { Document } from "./src/graphql/types.js";

const HOST = import.meta.env.OPENSEARCH_HOST;
const USERNAME = import.meta.env.OPENSEARCH_USERNAME;
const PASSWORD = import.meta.env.OPENSEARCH_PASSWORD;
const INDEX_NAME = import.meta.env.OPENSEARCH_INDEX_NAME;
const CONTENT_PATH = path.join(
  process.cwd(),
  "dist",
  "client",
  "search-index.json",
);

if (!HOST || !USERNAME || !PASSWORD || !INDEX_NAME || !CONTENT_PATH) {
  throw new Error(
    "Mancano le variabili d'ambiente di OpenSearch (HOST, USERNAME, PASSWORD, INDEX_NAME, CONTENT_PATH).",
  );
}

const client = new Client({
  node: HOST,
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
});

function getBulkBody(documents: Document[]) {
  return documents.flatMap((doc) => [
    { index: { _index: INDEX_NAME, _id: doc.slug } },
    doc,
  ]);
}

async function runIndexing() {
  console.log(`🚀 Inizio indicizzazione su ${HOST}/${INDEX_NAME}`);

  if (!fs.existsSync(CONTENT_PATH)) {
    console.error(
      `❌ Errore: File di contenuto non trovato in ${CONTENT_PATH}. Assicurati di aver eseguito 'astro build'.`,
    );
    return;
  }

  const rawContent = fs.readFileSync(CONTENT_PATH, "utf8");
  const documents = JSON.parse(rawContent);

  if (documents.length === 0) {
    console.log("⚠️ Nessun documento da indicizzare. Operazione saltata.");
    return;
  }

  try {
    await client.indices.delete({
      index: INDEX_NAME!,
      ignore_unavailable: true,
    });
    console.log(`🧹 Indice '${INDEX_NAME}' eliminato (se esistente).`);

    await client.indices.create({
      index: INDEX_NAME!,
      body: {
        settings: {
          number_of_shards: 1,
          number_of_replicas: 0,
        },
        mappings: {
          properties: {
            title: { type: "text", analyzer: "italian" }, // Analizzatore specifico per l'italiano
            content: { type: "text", analyzer: "italian" },
            url: { type: "keyword" }, // Non analizzato, per i link
          },
        },
      },
    });
    console.log(`✨ Nuovo indice '${INDEX_NAME}' creato.`);
  } catch (error) {
    let errorMessage = "Errore sconosciuto";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = (error as { message: string }).message;
    }
    console.error(
      "❌ Errore nella creazione/eliminazione dell'indice:",
      errorMessage,
    );
  }

  try {
    const bulkResponse = await client.bulk({
      body: getBulkBody(documents),
    });

    if (bulkResponse.body.errors) {
      console.error(
        "❌ Errore nell'indicizzazione BULK. Alcuni documenti non sono stati indicizzati.",
      );
    } else {
      console.log(
        `✅ Indicizzazione completata! ${documents.length} documenti indicizzati.`,
      );
    }
  } catch (error) {
    let errorMessage = "Errore sconosciuto";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = (error as { message: string }).message;
    }
    console.error("❌ Errore critico durante l'operazione BULK:", errorMessage);
  }
}

runIndexing();
