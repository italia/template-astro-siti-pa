import { ResourceFragment } from "@graphql/fragment/commonFragments";
import { graphql } from "@graphql/graphql";

export const AllResourcesQuery = graphql(
  `
    query AllResources {
      allResources(first: 2500) {
        ...ResourceFragment
      }
    }
  `,
  [ResourceFragment],
);
