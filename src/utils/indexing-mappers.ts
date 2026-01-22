import type {
  ArticleIndexingFragmentType,
  InsightIndexingFragmentType,
  NewsIndexingFragmentType,
  ResourseIndexingFragmentType,
  StoryIndexingFragmentType,
  WebinarIndexingFragmentType,
} from "@graphql/query/indexing";
import type {
  ArticleContentFragmentType,
  InsightContentFragmentType,
  StoryContentFragmentType,
  WebinarContentFragmentType,
} from "@graphql/templateFragments";
import type { SiteLocale } from "@graphql/types";
import { linkResolver } from "@utils/linkResolver";
import { render } from "datocms-structured-text-to-plain-text";

/* per la categoria devo prenderlo dal catalogo */
export const getMapArticle = (
  article: ArticleIndexingFragmentType,
  lang: SiteLocale,
) => {
  const structuredText = article.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;
  type SingleBlock = ArticleContentFragmentType["blocks"][number];

  const options = {
    renderBlock({ record }: { record: SingleBlock }) {
      switch (record.__typename) {
        case "ImageBlockRecord":
          return `${record.image.alt || ""}`;

        case "CalloutRecord":
          return `"${record.title}" - ${record.paragraph}`;

        case "ListCardEditorialWithIconRecord":
          return record.items
            .map((item) => {
              const title = item.title || "";
              const description = item.description || "";
              return `${title} ${description}`.trim();
            })
            .join(" ");

        case "OrderedListRecord":
          return record.items
            .map((item) => {
              const title = item.title || "";
              const description = item.paragraph || "";
              return `${title} ${description}`.trim();
            })
            .join(" ");

        case "QuickLinkCardRecord":
          const linkCardTitle = record.title || "";
          const links = record.links
            .map((item) => item.description || "")
            .join(" ");

          return `${linkCardTitle} ${links}`.trim();

        case "TopicsBlockRecord":
          const topicsTitle = record.title || "";
          const topicsList = record.topics
            .map((topic) => topic.label || "")
            .join(" ");

          return `${topicsTitle} ${topicsList}`.trim();

        default:
          console.warn(`Blocco non gestito: ${record.__typename}`);
          return "";
      }
    },
  };
  return {
    type: "article",
    id: article.id,
    category: article.parentPage?.allTitleLocales?.find(
      (t) => t.locale === lang,
    )?.value /* TODO da risolvere questa category risalendo l'albero */,
    internalLink: linkResolver(article.id, lang),
    title: article.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: article.allParagraphLocales?.find((t) => t.locale === lang)
      ?.value,
    content: render(structuredText, options),
  };
};

export const getMapInsight = (
  insight: InsightIndexingFragmentType,
  lang: SiteLocale,
) => {
  const flattenBlocks = (
    blocks: InsightContentFragmentType[] | undefined | null,
  ) => {
    if (!blocks) return "";
    return blocks
      .map((block) => {
        switch (block.__typename) {
          case "HeroRecord":
            return `${block.title} ${block.paragraph || ""}`;
          case "FaqSectionRecord":
            const faqTitle = block.title || "";
            const questionList = block.accordion.items
              .map((question) => `${question.header} ${question.body}`)
              .join(" ");

            return `${faqTitle} ${questionList}`.trim();
          case "StructuredTextRecord":
            return "";
          default:
            return "";
        }
      })
      .join(" ");
  };

  const contentData = insight.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);
  return {
    type: "insight",
    id: insight.id,
    category: insight.parentPage?.allTitleLocales?.find(
      (t) => t.locale === lang,
    )?.value,
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
) => {
  const flattenBlocks = (
    blocks: StoryContentFragmentType[] | undefined | null,
  ) => {
    if (!blocks) return "";
    return blocks
      .map((block) => {
        switch (block.__typename) {
          case "HeroRecord":
            return `${block.title} ${block.paragraph || ""}`;
          /* case 'IntroArticleRecord':
          const introTitle = `${block.text.title} ${block.text.paragraph || ""}`;
          const questionList = block.accordion.items
            .map(question => `${question.header} ${question.body}`)
            .join(' ');

          return `${faqTitle} ${questionList}`.trim(); */
          case "StructuredTextRecord":
            return "";
          default:
            return "";
        }
      })
      .join(" ");
  };

  const contentData = story.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);

  return {
    type: "story",
    id: story.id,
    category: story.parentPage?.allTitleLocales?.find((t) => t.locale === lang)
      ?.value,
    internalLink: linkResolver(story.id, lang),
    title: story.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: "",
    content: content,
  };
};

export const getMapWebinar = (
  webinar: WebinarIndexingFragmentType,
  lang: SiteLocale,
) => {
  const flattenBlocks = (
    blocks: WebinarContentFragmentType[] | undefined | null,
  ) => {
    if (!blocks) return "";
    return blocks
      .map((block) => {
        switch (block.__typename) {
          case "HeroRecord":
            return `${block.title} ${block.paragraph || ""}`;
          default:
            return "";
        }
      })
      .join(" ");
  };

  const contentData = webinar.allContentLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  const content = flattenBlocks(contentData ?? []);

  return {
    type: "webinar",
    id: webinar.id,
    category: "",
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
) => {
  return {
    type: "news",
    id: news.id,
    category: "",
    externalLink: "",
    title: news.allTitleLocales?.find((t) => t.locale === lang)?.value,
    description: news.allParagraphLocales?.find((t) => t.locale === lang)
      ?.value,
    content: news.allParagraphLocales?.find((t) => t.locale === lang)?.value,
  };
};

export const getMapResourse = (
  resourse: ResourseIndexingFragmentType,
  lang: SiteLocale,
) => {
  const block = resourse.allResourseLocales?.find(
    (t) => t.locale === lang,
  )?.value;

  if (!block) return null;

  switch (block.__typename) {
    case "ExternalLinkRecord":
      return {
        type: "resourse",
        id: resourse.id,
        category: "",
        externalLink: block.url,
        title: block.label,
        description: block.description,
        content: block.description,
      };
    case "DownloadLinkRecord":
      return {
        type: "resourse",
        id: resourse.id,
        category: "",
        downloadLink: block.doc.url,
        title: block.label,
        description: block.description,
        content: block.description,
      };
    default:
      return null;
  }
};
