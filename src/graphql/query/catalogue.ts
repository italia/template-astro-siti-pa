import { AllCataloguesRecordFragment } from "@graphql/fragment/catalogue";
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
