import { NewsItemFragment } from "@graphql/fragment/commonFragments";
import { graphql } from "@graphql/graphql";

export const AllNewsQuery = graphql(
  `
    query AllNews {
      allNewsItems {
        ...NewsItemFragment
      }
    }
  `,
  [NewsItemFragment],
);
