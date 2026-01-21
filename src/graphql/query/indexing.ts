import { graphql } from "@graphql/graphql";

export const AllDocumentsQuery = graphql(`
  query AllDocuments($locale: SiteLocale!) {
    allPageLegacies(locale: $locale) {
      id
      slug
      title
      content
      description
    }
  }
`);

export const LocaleLabelsQuery = graphql(`
  query LocaleLabels($locale: SiteLocale!) {
    lang(locale: $locale) {
      analyzer
      longLabel
      shortLabel
    }
  }
`);
