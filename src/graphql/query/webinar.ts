import {
  TagFragment,
  WebinarItemFragment,
} from "@graphql/fragment/commonFragments";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import {
  AllWebinarItemsFragment,
  WebinarContentFragment,
} from "@graphql/fragment/webinar";
import { graphql } from "@graphql/graphql";

export const AllWebinarItemsQuery = graphql(
  `
    query allWebinarItems {
      allWebinarItems {
        ...AllWebinarItemsFragment
      }
    }
  `,
  [AllWebinarItemsFragment],
);

export const AllWebinarQuery = graphql(
  `
    query AllWebinar {
      allWebinarItems {
        ...WebinarItemFragment
      }
    }
  `,
  [WebinarItemFragment],
);

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
