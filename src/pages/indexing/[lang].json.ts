import { AllDocumentsQuery } from "@graphql/query/indexing";
import type { SiteLocale } from "@graphql/types";
import { executeQuery } from "@lib/datocms";
import * as Mappers from "@utils/indexing-mappers";
import { LocalesQuery } from "@utils/query";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const {
    site: { locales },
  } = await executeQuery(LocalesQuery);
  return locales.map((lang) => ({
    params: {
      lang,
    },
  }));
}

export const prerender = true;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as SiteLocale;

  if (!lang) {
    return new Response("Language parameter is missing", { status: 400 });
  }

  const response = await executeQuery(AllDocumentsQuery);
  const articles = response.allArticles;
  const insights = response.allInsights;
  const stories = response.allStoryItems;
  const newsItems = response.allNewsItems;
  const webinars = response.allWebinarItems;
  const resourses = response.allResources;

  return new Response(
    JSON.stringify([
      ...newsItems.map((item) => Mappers.getMapNews(item, lang)),
      ...articles.map((item) => Mappers.getMapArticle(item, lang)),
      ...insights.map((item) => Mappers.getMapInsight(item, lang)),
      ...stories.map((item) => Mappers.getMapStory(item, lang)),
      ...webinars.map((item) => Mappers.getMapWebinar(item, lang)),
      ...resourses
        .map((item) => Mappers.getMapResourse(item, lang))
        .filter(Boolean),
    ]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
