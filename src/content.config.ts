import { executeQuery } from "@lib/datocms";
import { AllNewsQuery, AllStoryQuery, AllWebinarQuery } from "@utils/query";
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

// TODO: sync with WebinarItemFragmentType
const webinarSchema = z.object({
  id: z.string(),
  title: z.string(),
  paragraph: z.string(),
  topic: z.object({
    label: z.string(),
  }),
  date: z.string(),
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

const webinarsCollection = defineCollection({
  schema: webinarSchema,
  loader: async () => {
    const response = await executeQuery(AllWebinarQuery);
    return response.allWebinarItems;
  },
});

export const collections = {
  news: newsCollection,
  stories: storiesCollection,
  webinars: webinarsCollection,
};
