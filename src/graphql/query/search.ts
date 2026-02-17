import { SearchRecordFragment } from "@graphql/fragment/search";
import { graphql } from "@graphql/graphql";

export const SearchPageContentQuery = graphql(
  `
    query SearchPageContentQuery {
      search {
        ...SearchRecordFragment
      }
    }
  `,
  [SearchRecordFragment],
);
