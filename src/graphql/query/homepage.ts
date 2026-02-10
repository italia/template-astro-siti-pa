import { TagFragment } from "@graphql/fragment/commonFragments";
import { HomepageModelContentFragment } from "@graphql/fragment/homepage";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql } from "@graphql/graphql";

export const HomepageQuery = graphql(
  `
    query HomepageQuery($locale: SiteLocale!) {
      homepage(locale: $locale) {
        id
        title
        publishedAt: _publishedAt
        updatedAt: _updatedAt
        metaTags: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        seo {
          ...SeoFieldFragment
        }
        content {
          ...HomepageModelContentFragment
        }
      }
    }
  `,
  [HomepageModelContentFragment, SeoFieldFragment, TagFragment],
);
