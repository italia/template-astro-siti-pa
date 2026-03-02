import type { SiteLocale } from "@graphql/types";

const ui: Record<SiteLocale, Record<string, string>> = {
  it: {
    language: "Italiano",
    "language.short": "ITA",
    "skip.menu": "Vai al menù",
    "skip.content": "Vai al contenuto",
    "skip.footer": "Vai al piede",
    "link.external": "Apre in un nuovo tab",
    "link.internal": "Vai alla pagina",
    "link.download": "Scarica il file",
  },
  en: {
    language: "English",
    "language.short": "ENG",
    "skip.menu": "Go to menu",
    "skip.content": "Go to content",
    "skip.footer": "Go to footer",
    "link.external": "Go to external page",
    "link.internal": "Go to page",
    "link.download": "Download file",
  },
};

export function getI18n(lang: SiteLocale): Record<string, string> {
  return ui[lang] || ui["it"];
}
