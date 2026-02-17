import { TagFragment } from "@graphql/fragment/commonFragments";
import { InsightContentFragment } from "@graphql/fragment/insight";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const AllInsightsRecordFragment = graphql(
  `
    fragment AllInsightsRecordFragment on InsightRecord @_unmask {
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
  `,
  [InsightContentFragment],
);

export type AllInsightsRecordFragmentType = FragmentOf<
  typeof AllInsightsRecordFragment
>;

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
