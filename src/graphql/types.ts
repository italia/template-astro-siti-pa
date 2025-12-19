import type { introspection_types } from "@graphql/graphql-env";
import type {
  HomepageModelContentFragmentType,
  PageContentFragmentType,
} from "./templateFragments";

export type SiteLocale = introspection_types["SiteLocale"]["enumValues"];

export type ContentType =
  | HomepageModelContentFragmentType
  | PageContentFragmentType;
