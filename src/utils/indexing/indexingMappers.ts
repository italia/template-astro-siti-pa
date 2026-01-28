import type {
  ArticleIndexingFragmentType,
  InsightIndexingFragmentType,
  NewsIndexingFragmentType,
  PageIndexingFragmentType,
  ResourseIndexingFragmentType,
  StoryIndexingFragmentType,
  WebinarIndexingFragmentType,
} from "@graphql/query/indexing";
import type { SiteLocale } from "@graphql/types";
import { createDownloadUrl } from "@utils/createDownloadUrl";
import {
  flattenBlocks,
  getSearchRenderOptions,
} from "@utils/indexing/blockContentMappers";
import { linkResolver } from "@utils/linkResolver";
import { render } from "datocms-structured-text-to-plain-text";

export const getMapArticle = (
  article: ArticleIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const structuredText = article.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const stOptions = getSearchRenderOptions();

  return {
    type: "article",
    id: article.id,
    category,
    internalLink: linkResolver(article.id, lang),
    title: article.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: article.allParagraphLocales?.find((t) => t.locale === lang)
      ?.value,
    content: render(structuredText, stOptions),
  };
};

export const getMapInsight = (
  insight: InsightIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const contentData = insight.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);
  return {
    type: "insight",
    id: insight.id,
    category,
    internalLink: linkResolver(insight.id, lang),
    title: insight.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: insight.allAbstractLocales?.find((t) => t.locale === lang)
      ?.value,
    content: content,
  };
};

export const getMapStory = (
  story: StoryIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const contentData = story.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);

  return {
    type: "story",
    id: story.id,
    category,
    internalLink: linkResolver(story.id, lang),
    title: story.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: "",
    content: content,
  };
};

export const getMapWebinar = (
  webinar: WebinarIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const contentData = webinar.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);

  return {
    type: "webinar",
    id: webinar.id,
    category,
    internalLink: linkResolver(webinar.id, lang),
    title: webinar.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: webinar.allParagraphLocales?.find((t) => t.locale === lang)
      ?.value,
    content: content,
  };
};

export const getMapNews = (
  news: NewsIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  return {
    type: "news",
    id: news.id,
    category,
    externalLink: news.allLinkLocales?.find((t) => t.locale === lang)?.value,
    title: news.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: news.allParagraphLocales?.find((t) => t.locale === lang)
      ?.value,
    content: news.allParagraphLocales?.find((t) => t.locale === lang)?.value,
  };
};

export const getMapResourse = (
  resourse: ResourseIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const block = resourse.allResourseLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  if (!block) return null;

  switch (block.componentName) {
    case "ExternalLinkRecord":
      return {
        type: "resourse",
        id: resourse.id,
        category,
        externalLink: block.url,
        title: block.label,
        description: block.description,
        content: block.description,
      };
    case "DownloadLinkRecord":
      return {
        type: "resourse",
        id: resourse.id,
        category,
        downloadLink: createDownloadUrl(block.doc),
        title: block.label,
        description: block.description,
        content: block.description,
      };
    default:
      return null;
  }
};

export const getMapPages = (
  page: PageIndexingFragmentType,
  lang: SiteLocale,
) => {
  const contentData = page.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);
  return {
    type: "page",
    id: page.id,
    category: "",
    internalLink: linkResolver(page.id, lang),
    title: page.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: "",
    content: content,
  };
};
