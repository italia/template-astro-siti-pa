import { StoryCardFragment } from "@graphql/fragment/commonFragments";
import { AllStoriesRecordFragment } from "@graphql/fragment/story";
import { graphql } from "@graphql/graphql";

export const AllStoryCardQuery = graphql(
  `
    query AllStory($dateLimit: Date) {
      allStoryItems(
        first: 2500
        filter: { dateOfPublication: { gt: $dateLimit } }
      ) {
        ...StoryCardFragment
      }
    }
  `,
  [StoryCardFragment],
);

export const AllStoriesContentQuery = graphql(
  `
    query AllStoriesContentQuery {
      allStoryItems(first: 2500) {
        ...AllStoriesRecordFragment
      }
    }
  `,
  [AllStoriesRecordFragment],
);
