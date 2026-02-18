import { PageFragment } from "@graphql/fragment/page";
import { graphql } from "@graphql/graphql";

export const AllPagesContentQuery = graphql(
  `
    query AllPagesContentQuery {
      allPages(first: 2500) {
        ...PageFragment
      }
    }
  `,
  [PageFragment],
);
