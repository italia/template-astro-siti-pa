import { PageFragment } from "@graphql/fragment/page";
import { graphql } from "@graphql/graphql";

export const AllPagesContentQuery = graphql(
  `
    query AllPagesContentQuery {
      allPages {
        ...PageFragment
      }
    }
  `,
  [PageFragment],
);
