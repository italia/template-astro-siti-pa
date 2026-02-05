import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { StoryContentFragment } from "@graphql/templateFragments";
import { SeoFieldFragment } from "@graphql/seoFragments";

export const AllStoriesContentQuery = graphql(
  `
    query AllStoriesContentQuery {
      allStoryItems {
        id
        locales: _locales
        publishedAt: _publishedAt
        updatedAt: _updatedAt
        allContentLocales: _allContentLocales {
          locale
          value {
            ...StoryContentFragment
          }
        }
      }
    }
  `,
  [StoryContentFragment],
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
