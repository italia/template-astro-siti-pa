import { SearchPageContentFragment } from "@graphql/fragment/search";
import { graphql } from "@graphql/graphql";

export const SearchPageContentQuery = graphql(
  `
    query SearchPageContentQuery {
      search {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...SearchPageContentFragment
          }
        }
      }
    }
  `,
  [SearchPageContentFragment],
);
