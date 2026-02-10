import { ArticleContentFragment } from "@graphql/fragment/article";
import { TagFragment } from "@graphql/fragment/commonFragments";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql } from "@graphql/graphql";

export const AllArticlesContentQuery = graphql(
  `
    query AllArticlesContentQuery {
      allArticles {
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
    }
  `,
  [ArticleContentFragment],
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
