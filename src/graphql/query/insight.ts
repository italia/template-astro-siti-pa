import { TagFragment } from "@graphql/fragment/commonFragments";
import { InsightContentFragment } from "@graphql/fragment/insight";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql } from "@graphql/graphql";

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
