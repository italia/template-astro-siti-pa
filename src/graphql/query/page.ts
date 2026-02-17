import { TagFragment } from "@graphql/fragment/commonFragments";
import { PageFragment } from "@graphql/fragment/page";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql } from "@graphql/graphql";

export const AllPagesContentQuery = graphql(
  `
    query AllPagesContentQuery {
      allPages {
        ...PageFragment
      }
    }
  `,
  [PageFragment],
);

export const PageSeoQuery = graphql(
  `
    query PageSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      page(filter: { id: { eq: $id } }, locale: $locale) {
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
