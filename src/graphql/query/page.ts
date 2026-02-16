import { TagFragment } from "@graphql/fragment/commonFragments";
import { PageContentFragment } from "@graphql/fragment/page";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const PageFragment = graphql(
  `
    fragment PageFragment on PageRecord @_unmask {
      id
      locales: _locales
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...PageContentFragment
        }
      }
    }
  `,
  [PageContentFragment],
);

export type PageFragmentType = FragmentOf<typeof PageFragment>;

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
