import { StoryCardFragment } from "@graphql/fragment/commonFragments";
import { AllStoriesRecordFragment } from "@graphql/fragment/story";
import { graphql } from "@graphql/graphql";

export const AllStoryCardQuery = graphql(
  `
    query AllStory {
      allStoryItems {
        ...StoryCardFragment
      }
    }
  `,
  [StoryCardFragment],
);

export const AllStoriesContentQuery = graphql(
  `
    query AllStoriesContentQuery {
      allStoryItems {
        ...AllStoriesRecordFragment
      }
    }
  `,
  [AllStoriesRecordFragment],
);
