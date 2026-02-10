import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryItemFragmentType,
  WebinarItemFragmentType,
} from "@graphql/commonFragments";
import { executeQuery } from "@lib/datocms";
import {
  AllNewsQuery,
  AllResourcesQuery,
  AllStoryQuery,
  AllWebinarQuery,
  LocalesQuery,
} from "@utils/query";
import { defineCollection, z } from "astro:content";

const newsSchema = z.custom<NewsItemFragmentType>();

const storySchema = z.custom<StoryItemFragmentType>();

const webinarSchema = z.custom<WebinarItemFragmentType>();

const resourceSchema = z.custom<ResourceFragmentType>();

const newsCollection = defineCollection({
  schema: newsSchema,
  loader: async () => {
    const localesResponse = await executeQuery(LocalesQuery);
    const locales = localesResponse?.site?.locales || ["it"];

    const allEntries = [];

    for (const locale of locales) {
      try {
        const response = await executeQuery(AllNewsQuery, {
          variables: { locale },
        });

        if (response?.allNewsItems && Array.isArray(response.allNewsItems)) {
          const itemsWithLocale = response.allNewsItems.map((item: any) => ({
            ...item,
            id: `${locale}-${item.id}`,
            _locale: locale,
          }));

          allEntries.push(...itemsWithLocale);
        } else {
          console.warn(`Nessuna risorsa trovata per la lingua: ${locale}`);
        }
      } catch (error) {
        continue;
      }
    }

    return allEntries;
  },
});

const storiesCollection = defineCollection({
  schema: storySchema,
  loader: async () => {
    const localesResponse = await executeQuery(LocalesQuery);
    const locales = localesResponse?.site?.locales || ["it"];

    const allEntries = [];

    for (const locale of locales) {
      try {
        const response = await executeQuery(AllStoryQuery, {
          variables: { locale },
        });

        if (response?.allStoryItems && Array.isArray(response.allStoryItems)) {
          const itemsWithLocale = response.allStoryItems.map((item: any) => ({
            ...item,
            id: `${locale}-${item.id}`,
            _locale: locale,
          }));

          allEntries.push(...itemsWithLocale);
        } else {
          console.warn(`Nessuna risorsa trovata per la lingua: ${locale}`);
        }
      } catch (error) {
        continue;
      }
    }

    return allEntries;
  },
});

const webinarsCollection = defineCollection({
  schema: webinarSchema,
  loader: async () => {
    const localesResponse = await executeQuery(LocalesQuery);
    const locales = localesResponse?.site?.locales || ["it"];

    const allEntries = [];

    for (const locale of locales) {
      try {
        const response = await executeQuery(AllWebinarQuery, {
          variables: { locale },
        });

        if (
          response?.allWebinarItems &&
          Array.isArray(response.allWebinarItems)
        ) {
          const itemsWithLocale = response.allWebinarItems.map((item: any) => ({
            ...item,
            id: `${locale}-${item.id}`,
            _locale: locale,
          }));

          allEntries.push(...itemsWithLocale);
        } else {
          console.warn(`Nessuna risorsa trovata per la lingua: ${locale}`);
        }
      } catch (error) {
        continue;
      }
    }

    return allEntries;
  },
});

const resourcesCollection = defineCollection({
  schema: resourceSchema,
  loader: async () => {
    const localesResponse = await executeQuery(LocalesQuery);
    const locales = localesResponse?.site?.locales || ["it"];

    const allEntries = [];

    for (const locale of locales) {
      try {
        const response = await executeQuery(AllResourcesQuery, {
          variables: { locale },
        });

        if (response?.allResources && Array.isArray(response.allResources)) {
          const itemsWithLocale = response.allResources.map((item: any) => ({
            ...item,
            id: `${locale}-${item.id}`,
            _locale: locale,
          }));

          allEntries.push(...itemsWithLocale);
        } else {
          console.warn(`Nessuna risorsa trovata per la lingua: ${locale}`);
        }
      } catch (error) {
        continue;
      }
    }

    return allEntries;
  },
});

export const collections = {
  news_item: newsCollection,
  story_item: storiesCollection,
  webinar_item: webinarsCollection,
  resource: resourcesCollection,
};
