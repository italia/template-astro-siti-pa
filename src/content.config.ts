import { executeQuery } from "@lib/datocms";
import { AllNewsQuery, AllStoryQuery } from "@utils/query";
import { defineCollection, z } from "astro:content";

const imageSchema = z.object({
  id: z.string(),
  url: z.string(),
  alt: z.string().nullable(),
  title: z.string().nullable(),
  width: z.number().nullable(),
  height: z.number().nullable(),
});

// TODO: sync with NewsItemFragmentType
const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  paragraph: z.string(),
  category: z.string(),
  dateOfPublication: z.string(),
  link: z.string(),
  image: imageSchema,
});

// TODO: sync with StoryItemFragmentType
const storySchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  dateOfPublication: z.string(),
  slug: z.string(),
  image: imageSchema,
});

const newsCollection = defineCollection({
  schema: newsSchema,
  loader: async () => {
    const response = await executeQuery(AllNewsQuery);
    return response.allNewsItems;
  },
});

const storiesCollection = defineCollection({
  schema: storySchema,
  loader: async () => {
    const response = await executeQuery(AllStoryQuery);
    return response.allStoryItems;
  },
});

export const collections = {
  news: newsCollection,
  stories: storiesCollection,
};
