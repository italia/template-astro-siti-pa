import { getCollection } from "astro:content";
import { executeQuery } from "@lib/datocms";
import {
  AllNewsQuery,
  AllStoryQuery,
  AllWebinarQuery,
  AllResourcesQuery,
} from "@utils/query";

const wrap = (items: any[]) => items.map((item) => ({ data: item }));

export const getNews = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllNewsQuery, { includeDrafts: true });
    return wrap(res.allNewsItems);
  }
  return await getCollection("news");
};

export const getStories = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllStoryQuery, { includeDrafts: true });
    return wrap(res.allStoryItems);
  }
  return await getCollection("stories");
};

export const getWebinars = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllWebinarQuery, { includeDrafts: true });
    return wrap(res.allWebinarItems);
  }
  return await getCollection("webinars");
};

export const getResources = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllResourcesQuery, { includeDrafts: true });
    return wrap(res.allResources);
  }
  return await getCollection("resources");
};
