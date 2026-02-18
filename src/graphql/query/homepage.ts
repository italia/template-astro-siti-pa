import { HomepageRecordFragment } from "@graphql/fragment/homepage";
import { graphql } from "@graphql/graphql";

export const HomepageQuery = graphql(
  `
    query HomepageQuery {
      homepage {
        ...HomepageRecordFragment
      }
    }
  `,
  [HomepageRecordFragment],
);
