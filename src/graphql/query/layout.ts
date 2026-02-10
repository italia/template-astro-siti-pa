import { SidebarFragment } from "@graphql/fragment/commonFragments";
import {
  FooterFragment,
  HeaderFragment,
  SearchMenuFragment,
} from "@graphql/fragment/sectionFragments";
import { graphql } from "@graphql/graphql";

export const LayoutQuery = graphql(
  `
    query Layout($locale: SiteLocale!) {
      layout(locale: $locale) {
        ...FooterFragment
        ...HeaderFragment
      }
      homepage(locale: $locale) {
        id
      }
      search(locale: $locale) {
        ...SearchMenuFragment
      }
    }
  `,
  [FooterFragment, HeaderFragment, SearchMenuFragment],
);

export const SidebarQuery = graphql(
  `
    query Sidebar($locale: SiteLocale!) {
      sidebarForArticle(locale: $locale) {
        ...SidebarFragment
      }
    }
  `,
  [SidebarFragment],
);
