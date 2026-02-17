import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryCardFragmentType,
  WebinarItemFragmentType,
} from "@graphql/fragment/commonFragments";
import {
  AllCataloguesContentQuery,
  type AllCataloguesRecordFragmentType,
} from "@graphql/query/catalogue";
import {
  HomepageQuery,
  type HomepageRecordFragmentType,
} from "@graphql/query/homepage";
import {
  AllInsightsContentQuery,
  type AllInsightsRecordFragmentType,
} from "@graphql/query/insight";
import { AllNewsQuery } from "@graphql/query/news";
import {
  AllPagesContentQuery,
  type PageFragmentType,
} from "@graphql/query/page";
import { AllResourcesQuery } from "@graphql/query/resource";
import {
  SearchPageContentQuery,
  type SearchRecordFragmentType,
} from "@graphql/query/search";
import { AllGlobalSettingsQuery } from "@graphql/query/settings";
import {
  AllStoriesContentQuery,
  AllStoryCardQuery,
  type AllStoriesRecordFragmentType,
} from "@graphql/query/story";
import {
  AllWebinarQuery,
  AllWebinarsContentQuery,
  type AllWebinarRecordFragmentType,
} from "@graphql/query/webinar";
import { executeQuery } from "@lib/datocms";
import { defineCollection, z } from "astro:content";

const newsSchema = z.custom<NewsItemFragmentType>();

const storySchema = z.custom<StoryCardFragmentType>();

const webinarSchema = z.custom<WebinarItemFragmentType>();

const resourceSchema = z.custom<ResourceFragmentType>();

const globalSettingsSchema = z.object({
  locale: z.string(),
  value: z.object({
    siteName: z.string(),
    lastUpdateLabel: z.string(),
    ariaLabelLogo: z.string(),
    languageSelector: z.string(),
    chipTopicLabel: z.string(),
    ariaLabelCardCategory: z.string(),
    ariaLabelCardAction: z.string(),
    ariaLabelExternalLink: z.string(),
    ariaLabelInternalLink: z.string(),
    ariaLabelDownloadLink: z.string(),
    analyzer: z.string(),
    loading: z.string(),
  }),
});

const pageSchema = z.custom<PageFragmentType>();
const homepageSchema = z.custom<HomepageRecordFragmentType>();
const searchSchema = z.custom<SearchRecordFragmentType>();
const webinarContentSchema = z.custom<AllWebinarRecordFragmentType>();
const storyContentSchema = z.custom<AllStoriesRecordFragmentType>();
const insightSchema = z.custom<AllInsightsRecordFragmentType>();

const catalogueSchema = z.intersection(
  z.custom<AllCataloguesRecordFragmentType>(),
  z.object({
    datesRegistry: z.object({
      news: z.string().optional(),
      story: z.string().optional(),
      webinar: z.string().optional(),
      resource: z.string().optional(),
    }),
  }),
);

const newsCollection = defineCollection({
  schema: newsSchema,
  loader: async () => {
    const response = await executeQuery(AllNewsQuery);
    return response?.allNewsItems || [];
  },
});

const storiesCollection = defineCollection({
  schema: storySchema,
  loader: async () => {
    const response = await executeQuery(AllStoryCardQuery);
    return response?.allStoryItems || [];
  },
});

const webinarsCollection = defineCollection({
  schema: webinarSchema,
  loader: async () => {
    const response = await executeQuery(AllWebinarQuery);
    return response?.allWebinarItems || [];
  },
});

const resourcesCollection = defineCollection({
  schema: resourceSchema,
  loader: async () => {
    const response = await executeQuery(AllResourcesQuery);
    return response?.allResources || [];
  },
});

const globalSettingsCollection = defineCollection({
  schema: globalSettingsSchema,
  loader: async () => {
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
  },
});

const pagesCollection = defineCollection({
  schema: pageSchema,
  loader: async () => {
    const response = await executeQuery(AllPagesContentQuery);
    return response?.allPages || [];
  },
});

const homepageCollection = defineCollection({
  schema: homepageSchema,
  loader: async () => {
    const response = await executeQuery(HomepageQuery);
    return response?.homepage ? [response.homepage] : [];
  },
});

const searchCollection = defineCollection({
  schema: searchSchema,
  loader: async () => {
    const response = await executeQuery(SearchPageContentQuery);
    return response?.search ? [response.search] : [];
  },
});

const cataloguesCollection = defineCollection({
  schema: catalogueSchema,
  loader: async () => {
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
  },
});

const webinarContentCollection = defineCollection({
  schema: webinarContentSchema,
  loader: async () => {
    const response = await executeQuery(AllWebinarsContentQuery);
    return response?.allWebinarItems || [];
  },
});

const storyContentCollection = defineCollection({
  schema: storyContentSchema,
  loader: async () => {
    const response = await executeQuery(AllStoriesContentQuery);
    return response?.allStoryItems || [];
  },
});

const insightContentCollection = defineCollection({
  schema: insightSchema,
  loader: async () => {
    const response = await executeQuery(AllInsightsContentQuery);
    return response?.allInsights || [];
  },
});

export const collections = {
  news_item: newsCollection,
  story_item: storiesCollection,
  webinar_item: webinarsCollection,
  resource: resourcesCollection,
  global_settings: globalSettingsCollection,
  page: pagesCollection,
  homepage: homepageCollection,
  search: searchCollection,
  catalogue: cataloguesCollection,
  webinar_content: webinarContentCollection,
  story_content: storyContentCollection,
  insight: insightContentCollection,
};
