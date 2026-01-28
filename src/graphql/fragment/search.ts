import { graphql, type FragmentOf } from "@graphql/graphql";
import { HeroFragment } from "@graphql/sectionFragments";

export const SearchBarFragment = graphql(`
  fragment SearchBarFragment on SearchBarRecord @_unmask {
    title
    labelForNoResult
    labelForAllResult
    labelButton
    inputPlaceholder
  }
`);

export type SearchBarFragmentType = FragmentOf<typeof SearchBarFragment>;

export const SearchPageContentFragment = graphql(
  `
    fragment SearchPageContentFragment on SearchModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on SearchBarRecord {
        ...SearchBarFragment
      }
    }
  `,
  [HeroFragment, SearchBarFragment],
);

export type SearchPageContentFragmentType = FragmentOf<
  typeof SearchPageContentFragment
>;
