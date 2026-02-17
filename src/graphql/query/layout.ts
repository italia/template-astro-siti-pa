import {
  FooterFragment,
  HeaderFragment,
  SidebarFragment,
} from "@graphql/fragment/layout";
import { SearchMenuFragment } from "@graphql/fragment/sectionFragments";
import { graphql } from "@graphql/graphql";

export const LayoutQuery = graphql(
  `
    query Layout {
      layout {
        id
        ...FooterFragment
        ...HeaderFragment
      }
      homepage {
        id
      }
      search {
        ...SearchMenuFragment
      }
    }
  `,
  [FooterFragment, HeaderFragment, SearchMenuFragment],
);

export const SidebarQuery = graphql(
  `
    query Sidebar {
      sidebarForArticle {
        ...SidebarFragment
      }
    }
  `,
  [SidebarFragment],
);
