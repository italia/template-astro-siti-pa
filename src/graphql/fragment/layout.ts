import {
  BrandFragment,
  ExternalLinkFragment,
  InternalLinkFragment,
  LocaleFragment,
  MenuItemFragment,
  SidebarMenuFragment,
  SupportingBrandFragment,
} from "@graphql/fragment/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const HeaderFragment = graphql(
  `
    fragment HeaderFragment on LayoutRecord @_unmask {
      locales: _locales
      allMainNavigation: _allNavigationBarLocales {
        locale
        value {
          ... on MenuItemRecord {
            ...MenuItemFragment
          }
        }
      }
      allSecondaryNavigation: _allNavigationBarSecondaryLocales {
        locale
        value {
          ... on MenuItemRecord {
            ...MenuItemFragment
          }
        }
      }
      logoSelect
      _allTaglineLocales {
        ...LocaleFragment
      }
      _allOrganizationLocales {
        ...LocaleFragment
      }
      siteName
    }
  `,
  [MenuItemFragment, LocaleFragment],
);

export type HeaderFragmentType = FragmentOf<typeof HeaderFragment>;

export const FooterFragment = graphql(
  `
    fragment FooterFragment on LayoutRecord @_unmask {
      _allHeadingLocales(markdown: true) {
        locale
        value
      }
      _allOrganizationsLocales {
        locale
        value {
          ...BrandFragment
        }
      }
      _allTopicTitleLocales {
        ...LocaleFragment
      }
      _allTopicLinkLocales {
        locale
        value {
          linkTo {
            ... on CatalogueRecord {
              id
            }
            ... on PageRecord {
              id
            }
          }
          label
        }
      }
      _allUtilityTitleLocales {
        ...LocaleFragment
      }
      _allUtilityLocales {
        locale
        value {
          ... on RecordInterface {
            id
            componentName: __typename
          }
          ... on SupportingBrandRecord {
            ...SupportingBrandFragment
          }
          ... on ExternalLinkRecord {
            ...ExternalLinkFragment
          }
        }
      }
      _allSmallPrintLocales {
        locale
        value {
          ... on RecordInterface {
            id
            componentName: __typename
          }
          ... on ExternalLinkRecord {
            ...ExternalLinkFragment
          }
          ... on InternalLinkRecord {
            ...InternalLinkFragment
          }
        }
      }
    }
  `,
  [
    ExternalLinkFragment,
    InternalLinkFragment,
    BrandFragment,
    SupportingBrandFragment,
    LocaleFragment,
  ],
);

export type FooterFragmentType = FragmentOf<typeof FooterFragment>;

export const SidebarFragment = graphql(
  `
    fragment SidebarFragment on SidebarForArticleRecord @_unmask {
      id
      _allHeaderLabelLocales {
        locale
        value
      }
      _allOpenLabelLocales {
        ...LocaleFragment
      }
      _allCloseLabelLocales {
        ...LocaleFragment
      }
      _allMenuLocales {
        locale
        value {
          ...SidebarMenuFragment
        }
      }
    }
  `,
  [SidebarMenuFragment, LocaleFragment],
);

export type SidebarFragmentType = FragmentOf<typeof SidebarFragment>;
