import { ResourceFragment } from "@graphql/fragment/commonFragments";
import { graphql } from "@graphql/graphql";

export const AllResourcesQuery = graphql(
  `
    query AllResources {
      allResources {
        ...ResourceFragment
      }
    }
  `,
  [ResourceFragment],
);
