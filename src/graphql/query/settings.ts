import { LocaleFragment, TagFragment } from "@graphql/fragment/commonFragments";
import { CatalogueIndexingFragment } from "@graphql/fragment/indexing";
import {
  AllArticlesSlugFragment,
  AllCataloguesSlugFragment,
  AllInsightsSlugFragment,
  AllPagesSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
  HomepageFragment,
  SearchFragment,
} from "@graphql/fragment/slugFragments";
import { graphql } from "@graphql/graphql";

export const LocalesQuery = graphql(`
  query Locales {
    site: _site {
      locales
    }
  }
`);

export const SiteMetaTagsQuery = graphql(
  `
    query SiteMetaTags {
      site: _site {
        faviconMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);

export const AllGlobalSettingsQuery = graphql(
  `
    query AllGlobalSettings {
      globalSetting {
        _allAriaLabelCardActionLocales {
          ...LocaleFragment
        }
        _allAnalyzerLocales {
          ...LocaleFragment
        }
        _allAriaLabelCardCategoryLocales {
          ...LocaleFragment
        }
        _allAriaLabelDownloadLinkLocales {
          ...LocaleFragment
        }
        _allAriaLabelExternalLinkLocales {
          ...LocaleFragment
        }
        _allAriaLabelInternalLinkLocales {
          ...LocaleFragment
        }
        _allAriaLabelLogoLocales {
          ...LocaleFragment
        }
        _allLabelCtaLocales {
          ...LocaleFragment
        }
        _allChipTopicLabelLocales {
          ...LocaleFragment
        }
        _allLanguageSelectorLocales {
          ...LocaleFragment
        }
        _allLastUpdateLabelLocales {
          ...LocaleFragment
        }
        _allLoadingLocales {
          ...LocaleFragment
        }
        _allSiteNameLocales {
          ...LocaleFragment
        }
      }
    }
  `,
  [LocaleFragment],
);

export const PagesLinksQuery = graphql(
  `
    query PagesLinks {
      allPages(first: 2500) {
        ...AllPagesSlugFragment
      }
    }
  `,
  [AllPagesSlugFragment],
);

export const ArticlesLinksQuery = graphql(
  `
    query ArticlesLinks {
      allArticles(first: 2500) {
        ...AllArticlesSlugFragment
      }
    }
  `,
  [AllArticlesSlugFragment],
);

export const InsightsLinksQuery = graphql(
  `
    query InsightsLinks {
      allInsights(first: 2500) {
        ...AllInsightsSlugFragment
      }
    }
  `,
  [AllInsightsSlugFragment],
);

export const StoriesLinksQuery = graphql(
  `
    query StoriesLinks {
      allStoryItems(first: 2500) {
        ...AllStoryItemsSlugFragment
      }
    }
  `,
  [AllStoryItemsSlugFragment],
);

export const WebinarsLinksQuery = graphql(
  `
    query WebinarsLinks {
      allWebinarItems(first: 2500) {
        ...AllWebinarItemsSlugFragment
      }
    }
  `,
  [AllWebinarItemsSlugFragment],
);

export const CataloguesLinksQuery = graphql(
  `
    query CataloguesLinks {
      allCatalogues(first: 2500) {
        ...AllCataloguesSlugFragment
        ...CatalogueIndexingFragment
      }
    }
  `,
  [AllCataloguesSlugFragment, CatalogueIndexingFragment],
);

export const SingletonLinksQuery = graphql(
  `
    query SingletonLinks {
      homepage {
        ...HomepageFragment
      }
      search {
        ...SearchFragment
      }
    }
  `,
  [HomepageFragment, SearchFragment],
);
