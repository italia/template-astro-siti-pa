import {
  CalloutFragment,
  ListCollectionFragment,
  TagFragment,
} from "@graphql/fragment/commonFragments";
import {
  FaqSectionRecordFragment,
  HeroFragment,
  StructuredTextFragment,
} from "@graphql/fragment/sectionFragments";
import { AllInsightsSlugFragment } from "@graphql/fragment/slugFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
