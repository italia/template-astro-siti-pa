import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { InsightContentFragment } from "@graphql/templateFragments";
import { SeoFieldFragment } from "@graphql/seoFragments";

export const AllInsightsContentQuery = graphql(
  `
    query AllInsightsContentQuery {
      allInsights {
        id
        locales: _locales
        publishedAt: _publishedAt
        updatedAt: _updatedAt
        allContentLocales: _allContentLocales {
          locale
          value {
            ...InsightContentFragment
          }
        }
      }
    }
  `,
  [InsightContentFragment],
);

export const InsightSeoQuery = graphql(
  `
    query InsightSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      insight(filter: { id: { eq: $id } }, locale: $locale) {
        metaTags: _seoMetaTags {
          ...TagFragment
        }
        seo {
          ...SeoFieldFragment
        }
        updatedAt: _updatedAt
      }
    }
  `,
  [TagFragment, SeoFieldFragment],
);
