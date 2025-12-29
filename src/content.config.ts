import { executeQuery } from "@lib/datocms";
import { AllNewsQuery } from "@utils/query";
import { defineCollection, z } from "astro:content";

// TODO: complete schema
const newsCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
  }),
  loader: async () => {
    const response = await executeQuery(AllNewsQuery);
    return response.allNewsItems.map((news) => ({
      id: news.id,
      title: news.title,
    }));
  },
});

export const collections = {
  news: newsCollection,
};
