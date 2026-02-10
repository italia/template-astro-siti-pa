import type { introspection_types } from "@graphql/graphql-env";

export type SiteLocale = introspection_types["SiteLocale"]["enumValues"];

export type Document = {
  title: string;
  description: string;
  internalLink?: string;
  content: string;
  externalLink?: string;
  downloadLink?: string;
  [key: string]: any;
};

export type SearchResult = {
  id: string;
  type: string;
  category: string;
  title: string;
  description: string;
  internalLink?: string;
  externalLink?: string;
  downloadLink?: string;
};
