import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { CatalogueContentFragment } from "@graphql/templateFragments";

export const AllCataloguesContentQuery = graphql(
  `
    query AllCataloguesContentQuery {
      allCatalogues {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...CatalogueContentFragment
          }
        }
      }
      lastNews: allNewsItems(orderBy: _createdAt_DESC, first: 1) {
        publishedAt: _publishedAt
      }
      lastStory: allStoryItems(orderBy: _createdAt_DESC, first: 1) {
        publishedAt: _publishedAt
      }
      lastWebinar: allWebinarItems(orderBy: _createdAt_DESC, first: 1) {
        publishedAt: _publishedAt
      }
      lastResourse: allResources(orderBy: _createdAt_DESC, first: 1) {
        publishedAt: _publishedAt
      }
    }
  `,
  [CatalogueContentFragment],
);

export const CatalogueSeoQuery = graphql(
  `
    query CatalogueSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      catalogue(filter: { id: { eq: $id } }, locale: $locale) {
        seo: _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
