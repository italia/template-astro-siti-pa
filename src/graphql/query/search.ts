import { SearchPageContentFragment } from "@graphql/fragment/search";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const SearchRecordFragment = graphql(
  `
    fragment SearchRecordFragment on SearchRecord @_unmask {
      id
      locales: _locales
      allContentLocales: _allContentLocales {
        locale
        value {
          ...SearchPageContentFragment
        }
      }
    }
  `,
  [SearchPageContentFragment],
);

export type SearchRecordFragmentType = FragmentOf<typeof SearchRecordFragment>;

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
