import { AllCataloguesRecordFragment } from "@graphql/fragment/catalogue";
import { graphql } from "@graphql/graphql";

export const AllCataloguesContentQuery = graphql(
  `
    query AllCataloguesContentQuery {
      allCatalogues(first: 2500) {
        ...AllCataloguesRecordFragment
      }
    }
  `,
  [AllCataloguesRecordFragment],
);

export const LastItemsUpdateQuery = graphql(`
  query LastItemsUpdate {
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
`);
