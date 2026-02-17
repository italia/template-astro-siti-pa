import {
  StoryCardFragment,
  TagFragment,
} from "@graphql/fragment/commonFragments";
import { SeoFieldFragment } from "@graphql/fragment/seoFragments";
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

export const StorySeoQuery = graphql(
  `
    query StorySeoQuery($id: ItemId!, $locale: SiteLocale!) {
      storyItem(filter: { id: { eq: $id } }, locale: $locale) {
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
