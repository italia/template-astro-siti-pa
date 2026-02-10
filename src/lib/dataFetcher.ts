import { AllNewsQuery } from "@graphql/query/news";
import { AllResourcesQuery } from "@graphql/query/resource";
import { AllStoryCardQuery } from "@graphql/query/story";
import { AllWebinarQuery } from "@graphql/query/webinar";
import type { SiteLocale } from "@graphql/types";
import { executeQuery } from "@lib/datocms";
import { getCollection } from "astro:content";

const wrap = (items: any[]) => items.map((item) => ({ data: item }));

export const getNews = async (lang: SiteLocale, isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllNewsQuery, {
      variables: { locale: lang },
      includeDrafts: true,
    });
    return wrap(res.allNewsItems);
  }
  const items = await getCollection("news_item");
  return items.filter((item: any) => item.data._locale === lang);
};

export const getStories = async (lang: SiteLocale, isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllStoryCardQuery, {
      variables: { locale: lang },
      includeDrafts: true,
    });
    return wrap(res.allStoryItems);
  }
  const items = await getCollection("story_item");
  return items.filter((item: any) => item.data._locale === lang);
};

export const getWebinars = async (lang: SiteLocale, isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllWebinarQuery, {
      variables: { locale: lang },
      includeDrafts: true,
    });
    return wrap(res.allWebinarItems);
  }
  const items = await getCollection("webinar_item");
  return items.filter((item: any) => item.data._locale === lang);
};

export const getResources = async (lang: SiteLocale, isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllResourcesQuery, {
      variables: { locale: lang },
      includeDrafts: true,
    });
    return wrap(res.allResources);
  }
  const items = await getCollection("resource");
  return items.filter((item: any) => item.data._locale === lang);
};
