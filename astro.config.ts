import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { resolve } from "path";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("component-inventory") &&
        !page.includes("/search") &&
        !page.includes("/ricerca"),
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it",
          en: "en",
        },
      },
    }),
    react(),
  ],
  adapter: vercel(),
  redirects: {
    "/": {
      status: 301,
      destination: "/it",
    },
    "/crediti": {
      status: 301,
      destination: "/it/crediti",
    },
    "/glossario": {
      status: 301,
      destination: "/it/approfondimenti",
    },
    "/notizie": {
      status: 301,
      destination: "/it/novita",
    },
    "/notizie/2022-03-29-qualificazione-cloud-approfondimento-sul-quadro-regolatorio":
      {
        status: 301,
        destination: "/it/novita",
      },
    "notizie/2022-07-12-cloud-della-pa-realizziamo-sistema-operativo-del-paese":
      {
        status: 301,
        destination: "/it/novita",
      },
    "/privacy-policy": {
      status: 301,
      destination: "/it/privacy-policy",
    },
    "/programma-abilitazione-cloud": {
      status: 301,
      destination: "/it/guide",
    },
    "/programma-abilitazione-cloud/candidarsi-agli-avvisi-del-pnrr": {
      status: 301,
      destination: "/it/guide/prepararsi-alla-migrazione",
    },
    "/programma-abilitazione-cloud/come-classificare-dati-e-servizi": {
      status: 301,
      destination:
        "it/guide/prepararsi-alla-migrazione/classificare-dati-e-servizi",
    },
    "/programma-abilitazione-cloud/framework-di-lavoro": {
      status: 301,
      destination: "/it/guide/gestire-la-migrazione",
    },
    "/qualificazione-servizi-cloud": {
      status: 301,
      destination: "/it/approfondimenti",
    },
    "/qualificazione-servizi-cloud/catalogo-servizi-cloud": {
      status: 301,
      destination: "/it/materiali-e-strumenti",
    },
    "/qualificazione-servizi-cloud/qualificazione-cloud-approfondimento-sul-quadro-regolatorio":
      {
        status: 301,
        destination: "/it/novita",
      },
    "/strategia-cloud-pa": {
      status: 301,
      destination: "/it/strategia",
    },
    "/strategia-cloud-pa/classificazione-di-dati-e-servizi": {
      status: 301,
      destination:
        "it/guide/prepararsi-alla-migrazione/classificare-dati-e-servizi",
    },
    "/strategia-cloud-pa/le-misure-del-piano-nazionale-di-ripresa-e-resilienza":
      {
        status: 301,
        destination: "/it/strategia",
      },
    "/strategia-cloud-pa/polo-strategico-nazionale": {
      status: 301,
      destination: "/it/strategia",
    },
  },
  vite: {
    ssr: {
      noExternal: ["dataviz-components"],
    },
    resolve: {
      alias: {
        "/^@(.*)$/": resolve("./src/*"),
        "@splidejs/splide/src/css/core/index": resolve(
          "node_modules/@splidejs/splide/src/css/core/index.scss",
        ),
        "@bootstrap-src": "/node_modules/bootstrap-italia/src",
      },
    },
  },
});
