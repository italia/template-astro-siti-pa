import { TagFragment } from "@graphql/fragment/commonFragments";
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

export const GlobalSettingsQuery = graphql(`
  query GlobalSettings($locale: SiteLocale!) {
    globalSetting(locale: $locale) {
      siteName
      lastUpdateLabel
      ariaLabelLogo
      languageSelector
      chipTopicLabel
      ariaLabelCardCategory
      ariaLabelCardAction
      ariaLabelExternalLink
      ariaLabelInternalLink
      ariaLabelDownloadLink
      analyzer
      loading
    }
  }
`);

export const AllLinkQuery = graphql(
  `
    query AllLinks {
      allPages {
        ...AllPagesSlugFragment
      }
      allArticles {
        ...AllArticlesSlugFragment
      }
      allInsights {
        ...AllInsightsSlugFragment
      }
      allStoryItems {
        ...AllStoryItemsSlugFragment
      }
      allWebinarItems {
        ...AllWebinarItemsSlugFragment
      }
      allWebinarItems {
        ...AllWebinarItemsSlugFragment
      }
      allCatalogues {
        ...AllCataloguesSlugFragment
      }
      homepage {
        ...HomepageFragment
      }
      search {
        ...SearchFragment
      }
      allCatalogues {
        ...CatalogueIndexingFragment
      }
    }
  `,
  [
    AllArticlesSlugFragment,
    AllPagesSlugFragment,
    AllInsightsSlugFragment,
    AllStoryItemsSlugFragment,
    AllWebinarItemsSlugFragment,
    AllCataloguesSlugFragment,
    HomepageFragment,
    SearchFragment,
    CatalogueIndexingFragment,
  ],
);
