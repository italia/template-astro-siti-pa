import { executeQuery } from "@lib/datocms";
import { AllNewsQuery } from "@utils/query";
import { defineCollection, z } from "astro:content";

// TODO: sync with NewsItemFragmentType
const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  paragraph: z.string(),
  category: z.string(),
  dateOfPublication: z.string(),
  link: z.string(),
  image: z.object({
    id: z.string(),
    url: z.string(),
    alt: z.string().nullable(),
    title: z.string().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
  }),
});

const newsCollection = defineCollection({
  schema: newsSchema,
  loader: async () => {
    const response = await executeQuery(AllNewsQuery);
    return response.allNewsItems;
  },
});

export const collections = {
  news: newsCollection,
};
