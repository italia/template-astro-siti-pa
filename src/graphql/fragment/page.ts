import {
  DataSectionRecordFragment,
  FaqSectionRecordFragment,
  HeroFragment,
  NewsFeedFragment,
  StructuredTextFragment,
  SupportChannelsSectionFragment,
  SupportCTASectionFragment,
  TextAndAccordionFragment,
  TextAndImageFragment,
  TopicFilterFragment,
  UseCaseContainerFragment,
} from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
      ... on StructuredTextRecord {
        textContent: content {
          ...StructuredTextFragment
        }
      }
      ... on TextImageRecord {
        ...TextAndImageFragment
      }
      ... on TextAccordionRecord {
        ...TextAndAccordionFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SupportChannelsSectionFragment,
    FaqSectionRecordFragment,
    DataSectionRecordFragment,
    UseCaseContainerFragment,
    TopicFilterFragment,
    SupportCTASectionFragment,
    StructuredTextFragment,
    TextAndImageFragment,
    TextAndAccordionFragment,
  ],
);

export type PageContentFragmentType = FragmentOf<typeof PageContentFragment>;
