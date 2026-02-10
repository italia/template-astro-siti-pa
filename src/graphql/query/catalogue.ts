import { CatalogueContentFragment } from "@graphql/fragment/catalogue";
import { TagFragment } from "@graphql/fragment/commonFragments";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql } from "@graphql/graphql";

export const AllCataloguesContentQuery = graphql(
  `
    query AllCataloguesContentQuery {
      allCatalogues {
        id
        locales: _locales
        publishedAt: _publishedAt
        updatedAt: _updatedAt
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
