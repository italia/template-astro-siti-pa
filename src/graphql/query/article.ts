import { ArticleContentFragment } from "@graphql/fragment/article";
import { TagFragment } from "@graphql/fragment/commonFragments";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const AllArticlesRecordFragment = graphql(
  `
    fragment AllArticlesRecordFragment on ArticleRecord @_unmask {
      id
      locales: _locales
      updatedAt: _updatedAt
      publishedAt: _publishedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...ArticleContentFragment
        }
      }
    }
  `,
  [ArticleContentFragment],
);

export type AllArticlesRecordFragmentType = FragmentOf<
  typeof AllArticlesRecordFragment
>;

export const AllArticlesContentQuery = graphql(
  `
    query AllArticlesContentQuery {
      allArticles {
        ...AllArticlesRecordFragment
      }
    }
  `,
  [AllArticlesRecordFragment],
);

export const ArticleSeoQuery = graphql(
  `
    query ArticleSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      article(filter: { id: { eq: $id } }, locale: $locale) {
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
