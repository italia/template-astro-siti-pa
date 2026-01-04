import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  DataSectionRecordFragment,
  FaqSectionRecordFragment,
  HeroFragment,
  NewsFeedFragment,
  SectionFragment,
  SupportChannelsSectionFragment,
  TopicFilterFragment,
  UseCaseContainerFragment,
  SupportCTASectionFragment,
  StructuredTextFragment,
} from "@graphql/sectionFragments";
import {
  CalloutFragment,
  ExternalLinkFragment,
  ListCardEditorialWithIconFragment,
  ListCollectionFragment,
  ListInternalLinkFragment,
  LocaleFragment,
  OrderedListFragment,
  QuickLinkCardFragment,
  TagFragment,
  TopicsBlockFragment,
} from "./commonFragments";

export const HomepageModelContentFragment = graphql(
  `
    fragment HomepageModelContentFragment on HomepageModelContentField
    @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on NewsFeedRecord {
        ...NewsFeedFragment
      }
      ... on SectionRecord {
        ...SectionFragment
      }
      ... on SupportChannelsSectionRecord {
        ...SupportChannelsSectionFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SectionFragment,
    SupportChannelsSectionFragment,
  ],
);

export type HomepageModelContentFragmentType = FragmentOf<
  typeof HomepageModelContentFragment
>;

export const PageContentFragment = graphql(
  `
    fragment PageContentFragment on PageModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on NewsFeedRecord {
        ...NewsFeedFragment
      }
      ... on SectionRecord {
        ...SectionFragment
      }
      ... on SupportChannelsSectionRecord {
        ...SupportChannelsSectionFragment
      }
      ... on FaqSectionRecord {
        ...FaqSectionRecordFragment
      }
      ... on DataSectionRecord {
        ...DataSectionRecordFragment
      }
      ... on UseCaseContainerRecord {
        ...UseCaseContainerFragment
      }
      ... on TopicFilterRecord {
        ...TopicFilterFragment
      }
      ... on SupportCtaSectionRecord {
        ...SupportCTASectionFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SectionFragment,
    SupportChannelsSectionFragment,
    FaqSectionRecordFragment,
    DataSectionRecordFragment,
    UseCaseContainerFragment,
    TopicFilterFragment,
    SupportCTASectionFragment,
  ],
);

export type PageContentFragmentType = FragmentOf<typeof PageContentFragment>;

export const ArticleContentFragment = graphql(
  `
    fragment ArticleContentFragment on ArticleModelContentField @_unmask {
      value
      blocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on ListCardEditorialWithIconRecord {
          ...ListCardEditorialWithIconFragment
        }
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
        ... on OrderedListRecord {
          ...OrderedListFragment
        }
        ... on CalloutRecord {
          ...CalloutFragment
        }
        ... on QuickLinkCardRecord {
          ...QuickLinkCardFragment
        }
        ... on SupportCtaSectionRecord {
          ...SupportCTASectionFragment
        }
        ... on ListInternalLinkRecord {
          ...ListInternalLinkFragment
        }
        ... on TopicsBlockRecord {
          ...TopicsBlockFragment
        }
      }
    }
  `,
  [
    ListCardEditorialWithIconFragment,
    ExternalLinkFragment,
    OrderedListFragment,
    CalloutFragment,
    QuickLinkCardFragment,
    SupportCTASectionFragment,
    ListInternalLinkFragment,
    TopicsBlockFragment,
  ],
);

export type ArticleContentFragmentType = FragmentOf<
  typeof ArticleContentFragment
>;

export const AllArticlesSlugFragment = graphql(
  `
    fragment AllArticlesSlugFragment on ArticleRecord @_unmask {
      id
      locales: _locales
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      parent {
        id
      }
      parentPage {
        id
        allSlugLocales: _allSlugLocales {
          ...LocaleFragment
        }
      }
    }
  `,
  [LocaleFragment],
);

export type AllArticlesSlugFragmentType = FragmentOf<
  typeof AllArticlesSlugFragment
>;

export const AllPagesSlugFragment = graphql(
  `
    fragment AllPagesSlugFragment on PageRecord @_unmask {
      id
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export type AllPagesSlugFragmentType = FragmentOf<typeof AllPagesSlugFragment>;

export const AllArticlesFragment = graphql(
  `
    fragment AllArticlesFragment on ArticleRecord @_unmask {
      id
      seo: _seoMetaTags {
        ...TagFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...ArticleContentFragment
        }
      }
      ...AllArticlesSlugFragment
    }
  `,
  [TagFragment, ArticleContentFragment, AllArticlesSlugFragment],
);

export type AllArticlesFragmentType = FragmentOf<typeof AllArticlesFragment>;

export const AllInsightsSlugFragment = graphql(
  `
    fragment AllInsightsSlugFragment on InsightRecord @_unmask {
      id
      locales: _locales
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      parentPage {
        id
        allSlugLocales: _allSlugLocales {
          ...LocaleFragment
        }
      }
    }
  `,
  [LocaleFragment],
);

export type AllInsightsSlugFragmentType = FragmentOf<
  typeof AllInsightsSlugFragment
>;

export const InsightContentFragment = graphql(
  `
    fragment InsightContentFragment on InsightModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on FaqSectionRecord {
        ...FaqSectionRecordFragment
      }
      ... on StructuredTextRecord {
        textContent: content {
          ...StructuredTextFragment
        }
      }
      ... on ListCollectionRecord {
        ...ListCollectionFragment
      }
    }
  `,
  [
    FaqSectionRecordFragment,
    HeroFragment,
    ListCollectionFragment,
    CalloutFragment,
    StructuredTextFragment,
  ],
);

export type InsightContentFragmentType = FragmentOf<
  typeof InsightContentFragment
>;

export const AllInsightsFragment = graphql(
  `
    fragment AllInsightsFragment on InsightRecord @_unmask {
      id
      seo: _seoMetaTags {
        ...TagFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...InsightContentFragment
        }
      }
      ...AllInsightsSlugFragment
    }
  `,
  [TagFragment, InsightContentFragment, AllInsightsSlugFragment],
);

export type AllInsightsFragmentType = FragmentOf<typeof AllInsightsFragment>;
