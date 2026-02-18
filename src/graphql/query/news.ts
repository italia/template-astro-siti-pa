import { NewsItemFragment } from "@graphql/fragment/commonFragments";
import { graphql } from "@graphql/graphql";

export const AllNewsQuery = graphql(
  `
    query AllNews($dateLimit: Date) {
      allNewsItems(
        first: 2500
        filter: { dateOfPublication: { gt: $dateLimit } }
      ) {
        ...NewsItemFragment
      }
    }
  `,
  [NewsItemFragment],
);
