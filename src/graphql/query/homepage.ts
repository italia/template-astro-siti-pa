import { TagFragment } from "@graphql/fragment/commonFragments";
import { HomepageModelContentFragment } from "@graphql/fragment/homepage";
import { graphql } from "@graphql/graphql";

export const HomepageQuery = graphql(
  `
    query HomepageQuery($locale: SiteLocale!) {
      homepage(locale: $locale) {
        id
        title
        publishedAt: _publishedAt
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...HomepageModelContentFragment
        }
      }
    }
  `,
  [HomepageModelContentFragment, TagFragment],
);
