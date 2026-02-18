import { AllArticlesContentQuery } from "@graphql/query/article";
import { AllCataloguesContentQuery } from "@graphql/query/catalogue";
import { ErrorPageQuery } from "@graphql/query/errorPage";
import { HomepageQuery } from "@graphql/query/homepage";
import { AllInsightsContentQuery } from "@graphql/query/insight";
import { LayoutQuery, SidebarQuery } from "@graphql/query/layout";
import { AllNewsQuery } from "@graphql/query/news";
import { AllPagesContentQuery } from "@graphql/query/page";
import { AllResourcesQuery } from "@graphql/query/resource";
import { SearchPageContentQuery } from "@graphql/query/search";
import { GlobalSeoQuery } from "@graphql/query/seo";
import {
  AllGlobalSettingsQuery,
  LocalesQuery,
  SiteMetaTagsQuery,
} from "@graphql/query/settings";
import {
  AllStoriesContentQuery,
  AllStoryCardQuery,
} from "@graphql/query/story";
import {
  AllWebinarQuery,
  AllWebinarsContentQuery,
} from "@graphql/query/webinar";
import { executeQuery } from "@lib/datocms";

export const newsLoader = async () => {
  const response = await executeQuery(AllNewsQuery);
  return response?.allNewsItems || [];
};

export const storiesLoader = async () => {
  const response = await executeQuery(AllStoryCardQuery);
  return response?.allStoryItems || [];
};

export const webinarsLoader = async () => {
  const response = await executeQuery(AllWebinarQuery);
  return response?.allWebinarItems || [];
};

export const resourcesLoader = async () => {
  const response = await executeQuery(AllResourcesQuery);
  return response?.allResources || [];
};

export const globalSettingsLoader = async () => {
  function transformGlobalSettings(data: any) {
    const localesMap: Record<string, any> = {};

    const fieldMapping: Record<string, string> = {
      _allSiteNameLocales: "siteName",
      _allLastUpdateLabelLocales: "lastUpdateLabel",
      _allAriaLabelLogoLocales: "ariaLabelLogo",
      _allLanguageSelectorLocales: "languageSelector",
      _allChipTopicLabelLocales: "chipTopicLabel",
      _allAriaLabelCardCategoryLocales: "ariaLabelCardCategory",
      _allAriaLabelCardActionLocales: "ariaLabelCardAction",
      _allAriaLabelExternalLinkLocales: "ariaLabelExternalLink",
      _allAriaLabelInternalLinkLocales: "ariaLabelInternalLink",
      _allAriaLabelDownloadLinkLocales: "ariaLabelDownloadLink",
      _allAnalyzerLocales: "analyzer",
      _allLoadingLocales: "loading",
    };

    Object.entries(fieldMapping).forEach(([datoKey, zodKey]) => {
      const translations = data.globalSetting[datoKey] || [];

      translations.forEach((item: { locale: string; value: string }) => {
        if (!localesMap[item.locale]) {
          localesMap[item.locale] = {};
        }
        localesMap[item.locale][zodKey] = item.value;
      });
    });

    return Object.entries(localesMap).map(([locale, values]) => ({
      id: locale,
      locale,
      value: values,
    }));
  }

  const response = await executeQuery(AllGlobalSettingsQuery);
  if (!response?.globalSetting) return [];

  return transformGlobalSettings(response);
};

export const pagesLoader = async () => {
  const response = await executeQuery(AllPagesContentQuery);
  return response?.allPages || [];
};

export const homepageLoader = async () => {
  const response = await executeQuery(HomepageQuery);
  return response?.homepage ? [response.homepage] : [];
};

export const searchLoader = async () => {
  const response = await executeQuery(SearchPageContentQuery);
  return response?.search ? [response.search] : [];
};

export const cataloguesLoader = async () => {
  const response = await executeQuery(AllCataloguesContentQuery);
  const datesRegistry = {
    news: response?.lastNews?.[0]?.publishedAt,
    story: response?.lastStory?.[0]?.publishedAt,
    webinar: response?.lastWebinar?.[0]?.publishedAt,
    resource: response?.lastResource?.[0]?.publishedAt,
  };

  return (
    response?.allCatalogues.map((cat: any) => ({
      ...cat,
      datesRegistry: datesRegistry,
    })) || []
  );
};

export const webinarContentLoader = async () => {
  const response = await executeQuery(AllWebinarsContentQuery);
  return response?.allWebinarItems || [];
};

export const storyContentLoader = async () => {
  const response = await executeQuery(AllStoriesContentQuery);
  return response?.allStoryItems || [];
};

export const insightContentLoader = async () => {
  const response = await executeQuery(AllInsightsContentQuery);
  return response?.allInsights || [];
};

export const articleContentLoader = async () => {
  const response = await executeQuery(AllArticlesContentQuery);
  return response?.allArticles || [];
};

export const layoutLoader = async () => {
  const response = await executeQuery(LayoutQuery);
  if (!response?.homepage?.id) return [];
  return [
    {
      id: "layout",
      layout: response?.layout,
      search: response?.search,
      homepageId: response?.homepage?.id,
    },
  ];
};

export const sidebarLoader = async () => {
  const response = await executeQuery(SidebarQuery);
  if (!response?.sidebarForArticle) return [];

  return [
    {
      ...response.sidebarForArticle,
      id: "sidebar",
    },
  ];
};

export const localesLoader = async () => {
  const response = await executeQuery(LocalesQuery);

  if (!response?.site?.locales) return [];

  return [
    {
      id: "site-locales",
      locales: response.site.locales,
    },
  ];
};

export const errorPageLoader = async () => {
  const response = await executeQuery(ErrorPageQuery);

  if (!response?.globalSetting) return [];

  return [
    {
      id: "error-page",
      globalSetting: response.globalSetting,
      homepageId: response.homepage?.id,
    },
  ];
};

export const siteMetaTagsLoader = async () => {
  const response = await executeQuery(SiteMetaTagsQuery);

  if (!response?.site?.faviconMetaTags) return [];

  return [
    {
      id: "site-meta-tags",
      faviconMetaTags: response.site.faviconMetaTags,
    },
  ];
};

export const globalSeoLoader = async () => {
  const localesRes = await executeQuery(LocalesQuery);
  const locales = localesRes?.site?.locales || ["it"];

  const allSeoEntries = [];

  for (const locale of locales) {
    const response = await executeQuery(GlobalSeoQuery, {
      variables: {
        locale,
      },
    });

    if (response?.allArticles) {
      const entries = response.allArticles.map((article) => ({
        id: `${article.id}_${locale}`,
        recordId: article.id,
        locale: locale,
        metaTags: article.metaTags,
        seo: article.seo,
        updatedAt: article.updatedAt,
      }));
      allSeoEntries.push(...entries);
    }
    if (response?.allPages) {
      const entries = response.allPages.map((page) => ({
        id: `${page.id}_${locale}`,
        recordId: page.id,
        locale: locale,
        metaTags: page.metaTags,
        seo: page.seo,
        updatedAt: page.updatedAt,
      }));
      allSeoEntries.push(...entries);
    }
    if (response?.allCatalogues) {
      const entries = response.allCatalogues.map((page) => ({
        id: `${page.id}_${locale}`,
        recordId: page.id,
        locale: locale,
        metaTags: page.metaTags,
        seo: page.seo,
        updatedAt: page.updatedAt,
      }));
      allSeoEntries.push(...entries);
    }
    if (response?.allStoryItems) {
      const entries = response.allStoryItems.map((page) => ({
        id: `${page.id}_${locale}`,
        recordId: page.id,
        locale: locale,
        metaTags: page.metaTags,
        seo: page.seo,
        updatedAt: page.updatedAt,
      }));
      allSeoEntries.push(...entries);
    }
    if (response?.allInsights) {
      const entries = response.allInsights.map((page) => ({
        id: `${page.id}_${locale}`,
        recordId: page.id,
        locale: locale,
        metaTags: page.metaTags,
        seo: page.seo,
        updatedAt: page.updatedAt,
      }));
      allSeoEntries.push(...entries);
    }
    if (response?.allWebinarItems) {
      const entries = response.allWebinarItems.map((page) => ({
        id: `${page.id}_${locale}`,
        recordId: page.id,
        locale: locale,
        metaTags: page.metaTags,
        seo: page.seo,
        updatedAt: page.updatedAt,
      }));
      allSeoEntries.push(...entries);
    }
    if (response?.homepage) {
      const page = response.homepage;
      const entries = {
        id: `${page.id}_${locale}`,
        recordId: page.id,
        locale: locale,
        metaTags: page.metaTags,
        seo: page.seo,
        updatedAt: page.updatedAt,
      };
      allSeoEntries.push(entries);
    }
  }

  return allSeoEntries;
};
