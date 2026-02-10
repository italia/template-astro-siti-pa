import {
  CalloutLinkFragment,
  CatalogueFeedFragment,
  HeroFragment,
} from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const CatalogueContentFragment = graphql(
  `
    fragment CatalogueContentFragment on CatalogueModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on CatalogueFeedRecord {
        ...CatalogueFeedFragment
      }
      ... on CalloutLinkRecord {
        ...CalloutLinkFragment
      }
    }
  `,
  [HeroFragment, CatalogueFeedFragment, CalloutLinkFragment],
);

export type CatalogueContentFragmentType = FragmentOf<
  typeof CatalogueContentFragment
>;
