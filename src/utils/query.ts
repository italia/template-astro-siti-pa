import { graphql } from "@graphql/graphql";
import {
  TagFragment,
  LocaleFragment,
  ChartFragment,
  KpiFragment,
} from "@graphql/commonFragments";
import { HomepageModelContentFragment } from "@graphql/templateFragments";
import { HeaderFragment } from "@graphql/sectionFragments";

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

export const AllPagesSlugQuery = graphql(
  `
    query AllPages {
      allPages {
        allSlugLocales: _allSlugLocales {
          ...LocaleFragment
        }
      }
    }
  `,
  [LocaleFragment],
);

export const PageBySlugQuery = graphql(
  `
    query PageBySlug($slug: String!, $locale: SiteLocale!) {
      page(filter: { slug: { eq: $slug } }, locale: $locale) {
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        chart {
          ...ChartFragment
        }
        kpi {
          ...KpiFragment
        }
      }
    }
  `,
  [TagFragment, ChartFragment, KpiFragment],
);

export const GlobalSettingsQuery = graphql(`
  query GlobalSettings($locale: SiteLocale!) {
    globalSetting(locale: $locale) {
      siteName
    }
  }
`);

export const HeaderQuery = graphql(
  `
    query Layout($locale: SiteLocale!) {
      layout(locale: $locale) {
        ...HeaderFragment
      }
    }
  `,
  [HeaderFragment],
);

export const HomepageQuery = graphql(
  `
    query HomepageQuery($locale: SiteLocale!) {
      homepage(locale: $locale) {
        title
        content {
          ...HomepageModelContentFragment
        }
      }
    }
  `,
  [HomepageModelContentFragment],
);
