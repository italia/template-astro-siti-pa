import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  DataSectionRecordFragment,
  FaqSectionRecordFragment,
  HeroFragment,
  NewsFeedFragment,
  SectionFragment,
  SupportChannelsSectionFragment,
} from "@graphql/sectionFragments";

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
    fragment PageContentFragment on ContentModelContentField @_unmask {
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
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SectionFragment,
    SupportChannelsSectionFragment,
    FaqSectionRecordFragment,
    DataSectionRecordFragment,
  ],
);

export type PageContentFragmentType = FragmentOf<typeof PageContentFragment>;
