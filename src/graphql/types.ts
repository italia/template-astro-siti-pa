import type { introspection_types } from "./graphql-env";

export type SiteLocale = introspection_types["SiteLocale"]["enumValues"];

/* TODO */
export type Document = {
  slug: string;
  title: string;
  description: string;
  content: string;
  url: string;
  [key: string]: any;
};

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  slug: string;
  id: string;
}
