import { AllCataloguesRecordFragment } from "@graphql/fragment/catalogue";
import { TagFragment } from "@graphql/fragment/commonFragments";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
import { graphql } from "@graphql/graphql";

export const AllCataloguesContentQuery = graphql(
  `
    query AllCataloguesContentQuery {
      allCatalogues {
        ...AllCataloguesRecordFragment
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
      lastResource: allResources(orderBy: _createdAt_DESC, first: 1) {
        publishedAt: _publishedAt
      }
    }
  `,
  [AllCataloguesRecordFragment],
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
