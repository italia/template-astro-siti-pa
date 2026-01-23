import {
  AllDocumentsQuery,
  type ArticleIndexingFragmentType,
} from "@graphql/query/indexing";
import type { SiteLocale } from "@graphql/types";
import { executeQuery } from "@lib/datocms";
import * as Mappers from "@utils/indexing/indexingMappers";
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

const getCategoryName = (page: any, lang: SiteLocale): string => {
  return (
    page?.allTitleLocales?.find((t: any) => t.locale === lang)?.value || ""
  );
};

const resolveArticleCategory = (
  items: ArticleIndexingFragmentType[],
  lang: SiteLocale,
): string => {
  const firstValidParent = items.find((item) => item.parentPage)?.parentPage;

  if (!firstValidParent) return "";

  return (
    firstValidParent.allTitleLocales?.find((t: any) => t.locale === lang)
      ?.value || ""
  );
};

function getTitleByType(
  catalogues: { type: string[]; title?: string }[],
  searchType: string,
): string | undefined {
  const result = catalogues.find((item) => item.type.includes(searchType));
  return result?.title;
}

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
  const catalogues = response.allCatalogues.map((catalogue) => {
    const title = catalogue?.allTitleLocales?.find(
      (t: any) => t.locale === lang,
    )?.value;
    const feedRecord = catalogue.content.find(
      (item) => item.componentName === "CatalogueFeedRecord",
    );
    let tabTypes: string[] = [];
    if (feedRecord && "tabs" in feedRecord) {
      tabTypes = feedRecord.tabs?.map((item) => item.newsPageTabType) || [];
    }

    return {
      type: tabTypes,
      title,
    };
  });

  const articleCategory = resolveArticleCategory(articles, lang);
  const insightCategory = getCategoryName(insights[0]?.parentPage, lang);
  const storyCategory = getCategoryName(stories[0]?.parentPage, lang);
  const newsCategory = getTitleByType(catalogues, "news") || "";
  const webinarCategory = getCategoryName(webinars[0]?.parentPage, lang);
  const resourseCategory = getTitleByType(catalogues, "resource") || "";

  return new Response(
    JSON.stringify([
      ...newsItems.map((item) => Mappers.getMapNews(item, lang, newsCategory)),
      ...articles.map((item) =>
        Mappers.getMapArticle(item, lang, articleCategory),
      ),
      ...insights.map((item) =>
        Mappers.getMapInsight(item, lang, insightCategory),
      ),
      ...stories.map((item) => Mappers.getMapStory(item, lang, storyCategory)),
      ...webinars.map((item) =>
        Mappers.getMapWebinar(item, lang, webinarCategory),
      ),
      ...resourses
        .map((item) => Mappers.getMapResourse(item, lang, resourseCategory))
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
