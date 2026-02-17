import { HomepageModelContentFragment } from "@graphql/fragment/homepage";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const HomepageRecordFragment = graphql(
  `
    fragment HomepageRecordFragment on HomepageRecord @_unmask {
      id
      title
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...HomepageModelContentFragment
        }
      }
    }
  `,
  [HomepageModelContentFragment],
);

export type HomepageRecordFragmentType = FragmentOf<
  typeof HomepageRecordFragment
>;

export const HomepageQuery = graphql(
  `
    query HomepageQuery {
      homepage {
        ...HomepageRecordFragment
      }
    }
  `,
  [HomepageRecordFragment],
);

/* 
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
 */
