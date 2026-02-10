import { NewsItemFragment } from "@graphql/fragment/commonFragments";
import { graphql } from "@graphql/graphql";

export const AllNewsQuery = graphql(
  `
    query AllNews($locale: SiteLocale) {
      allNewsItems(locale: $locale) {
        ...NewsItemFragment
      }
    }
  `,
  [NewsItemFragment],
);
