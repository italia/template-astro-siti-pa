import {
  DownloadLinkFragment,
  ExternalLinkFragment,
  LocaleFragment,
} from "@graphql/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  ArticleLocalesFragment,
  InsightLocalesFragment,
  StoryItemLocalesFragment,
  WebinarItemLocalesFragment,
} from "@graphql/metaFragments";
import {
  AllArticlesSlugFragment,
  AllInsightsSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
} from "@graphql/slugFragments";
import {
  ArticleContentFragment,
  InsightContentFragment,
  StoryContentFragment,
} from "@graphql/templateFragments";

export const ArticleIndexingFragment = graphql(
  `
    fragment ArticleIndexingFragment on ArticleRecord @_unmask {
      id
      ...AllArticlesSlugFragment
      ...ArticleLocalesFragment
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }

      allContentLocales: _allContentLocales {
        locale
        value {
          ...ArticleContentFragment
        }
      }
    }
  `,
  [ArticleContentFragment, ArticleLocalesFragment, AllArticlesSlugFragment],
);

export type ArticleIndexingFragmentType = FragmentOf<
  typeof ArticleIndexingFragment
>;

export const InsightIndexingFragment = graphql(
  `
    fragment InsightIndexingFragment on InsightRecord @_unmask {
      id
      ...AllInsightsSlugFragment
      ...InsightLocalesFragment
      allAbstractLocales: _allAbstractLocales {
        locale
        value
      }

      allContentLocales: _allContentLocales {
        locale
        value {
          ...InsightContentFragment
        }
      }
    }
  `,
  [AllInsightsSlugFragment, InsightLocalesFragment, InsightContentFragment],
);

export type InsightIndexingFragmentType = FragmentOf<
  typeof InsightIndexingFragment
>;

export const StoryIndexingFragment = graphql(
  `
    fragment StoryIndexingFragment on StoryItemRecord @_unmask {
      id
      ...AllStoryItemsSlugFragment
      ...StoryItemLocalesFragment
      allContentLocales: _allContentLocales {
        locale
        value {
          ...StoryContentFragment
        }
      }
    }
  `,
  [AllStoryItemsSlugFragment, StoryItemLocalesFragment, StoryContentFragment],
);

export type StoryIndexingFragmentType = FragmentOf<
  typeof StoryIndexingFragment
>;

export const NewsIndexingFragment = graphql(
  `
    fragment NewsIndexingFragment on NewsItemRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
      allLinkLocales: _allLinkLocales {
        ...LocaleFragment
      }
      allParagraphLocales: _allParagraphLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export type NewsIndexingFragmentType = FragmentOf<typeof NewsIndexingFragment>;

export const WebinarIndexingFragment = graphql(
  `
    fragment WebinarIndexingFragment on WebinarItemRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
      ...AllWebinarItemsSlugFragment
      ...WebinarItemLocalesFragment
      allParagraphLocales: _allParagraphLocales {
        ...LocaleFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...StoryContentFragment
        }
      }
    }
  `,
  [AllWebinarItemsSlugFragment, LocaleFragment, WebinarItemLocalesFragment],
);

export type WebinarIndexingFragmentType = FragmentOf<
  typeof WebinarIndexingFragment
>;

export const ResourseIndexingFragment = graphql(
  `
    fragment ResourseIndexingFragment on ResourceRecord @_unmask {
      id
      allResourseLocales: _allResourceLocales {
        locale
        value {
          ... on RecordInterface {
            id
            componentName: __typename
          }
          ... on ExternalLinkRecord {
            ...ExternalLinkFragment
          }
          ... on DownloadLinkRecord {
            ...DownloadLinkFragment
          }
        }
      }
    }
  `,
  [ExternalLinkFragment, DownloadLinkFragment],
);

export type ResourseIndexingFragmentType = FragmentOf<
  typeof ResourseIndexingFragment
>;

export const AllDocumentsQuery = graphql(
  `
    query AllDocuments {
      allArticles {
        ...ArticleIndexingFragment
      }
      allInsights {
        ...InsightIndexingFragment
      }
      allStoryItems {
        ...StoryIndexingFragment
      }
      allNewsItems {
        ...NewsIndexingFragment
      }
      allWebinarItems {
        ...WebinarIndexingFragment
      }
      allResources {
        ...ResourseIndexingFragment
      }
    }
  `,
  [
    NewsIndexingFragment,
    StoryIndexingFragment,
    InsightIndexingFragment,
    ArticleIndexingFragment,
    WebinarIndexingFragment,
    ResourseIndexingFragment,
  ],
);

export const LocaleLabelsQuery = graphql(`
  query LocaleLabels($locale: SiteLocale!) {
    lang(locale: $locale) {
      analyzer
      longLabel
      shortLabel
    }
  }
`);
