import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { WebinarContentFragment } from "@graphql/templateFragments";
import { SeoFieldFragment } from "@graphql/seoFragments";

export const AllWebinarsContentQuery = graphql(
  `
    query AllWebinarsContentQuery {
      allWebinarItems {
        id
        locales: _locales
        publishedAt: _publishedAt
        updatedAt: _updatedAt
        allContentLocales: _allContentLocales {
          locale
          value {
            ...WebinarContentFragment
          }
        }
      }
    }
  `,
  [WebinarContentFragment],
);

export const WebinarSeoQuery = graphql(
  `
    query WebinarSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      webinarItem(filter: { id: { eq: $id } }, locale: $locale) {
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
