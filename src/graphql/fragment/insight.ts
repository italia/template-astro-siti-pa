import {
  CalloutFragment,
  ListCollectionFragment,
  TagFragment,
} from "@graphql/fragment/commonFragments";
import {
  ArticleSTFragment,
  FaqSectionRecordFragment,
  HeroFragment,
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
        ...ArticleSTFragment
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
    ArticleSTFragment,
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

export const AllInsightsRecordFragment = graphql(
  `
    fragment AllInsightsRecordFragment on InsightRecord @_unmask {
      id
      locales: _locales
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...InsightContentFragment
        }
      }
    }
  `,
  [InsightContentFragment],
);

export type AllInsightsRecordFragmentType = FragmentOf<
  typeof AllInsightsRecordFragment
>;
