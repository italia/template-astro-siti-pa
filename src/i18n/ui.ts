import type { SiteLocale } from "@graphql/types";

const ui: Record<SiteLocale, Record<string, string>> = {
  it: {
    language: "Italiano",
    "language.short": "ITA",
    "language.analyzer": "italian",
    "skip.menu": "Vai al menù",
    "skip.content": "Vai al contenuto",
    "skip.footer": "Vai al piede",
    "link.external": "Apre in un nuovo tab",
    "link.internal": "Vai alla pagina",
    "link.download": "Scarica il file",
    "header.logo": "Vai alla homepage di Cloud Italia",
    "header.languageSelector": "Seleziona lingua: lingua selezionata",
    "header.showHideMenu": "Mostra/nascondi navigazione",
    "header.hideMenu": "Nascondi navigazione",
    "header.mainNav": "Navigazione principale",
    "filter.topic": "Argomento: ",
    "card.topic": "Categoria: ",
    "card.action": "Link correlati: ",
    loading: "Caricamento...",
    breadcrumb: "Percorso di navigazione",
  },
  en: {
    language: "English",
    "language.short": "ENG",
    "language.analyzer": "english",
    "skip.menu": "Go to menu",
    "skip.content": "Go to content",
    "skip.footer": "Go to footer",
    "link.external": "Go to external page",
    "link.internal": "Go to page",
    "link.download": "Download file",
    "header.logo": "Vai alla homepage di Cloud Italia",
    "header.languageSelector": "Seleziona lingua: lingua selezionata",
    "header.showHideMenu": "Mostra/nascondi navigazione",
    "header.hideMenu": "Nascondi navigazione",
    "header.mainNav": "Navigazione principale",
    "filter.topic": "Argomento: ",
    "card.topic": "Categoria: ",
    "card.action": "Link correlati: ",
    loading: "Caricamento...",
    breadcrumb: "Breadcrumb",
  },
};

export function getI18n(lang: SiteLocale): Record<string, string> {
  return ui[lang] || ui["it"];
}
