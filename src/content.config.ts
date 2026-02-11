import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryCardFragmentType,
  WebinarItemFragmentType,
} from "@graphql/fragment/commonFragments";
import { AllNewsQuery } from "@graphql/query/news";
import { AllResourcesQuery } from "@graphql/query/resource";
import { AllStoryCardQuery } from "@graphql/query/story";
import { AllWebinarQuery } from "@graphql/query/webinar";
import { executeQuery } from "@lib/datocms";

import { defineCollection, z } from "astro:content";

const newsSchema = z.custom<NewsItemFragmentType>();

const storySchema = z.custom<StoryCardFragmentType>();

const webinarSchema = z.custom<WebinarItemFragmentType>();

const resourceSchema = z.custom<ResourceFragmentType>();

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

export const collections = {
  news_item: newsCollection,
  story_item: storiesCollection,
  webinar_item: webinarsCollection,
  resource: resourcesCollection,
};
