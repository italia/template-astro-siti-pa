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
import { AllGlobalSettingsQuery, LocalesQuery } from "@graphql/query/settings";
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
  return response?.sidebarForArticle ? [response.sidebarForArticle] : [];
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
