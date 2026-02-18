import {
  ArticleIndexingFragment,
  CatalogueIndexingFragment,
  InsightIndexingFragment,
  NewsIndexingFragment,
  PageIndexingFragment,
  ResourseIndexingFragment,
  StoryIndexingFragment,
  WebinarIndexingFragment,
} from "@graphql/fragment/indexing";
import { graphql } from "@graphql/graphql";

export const ArticlesIdxQuery = graphql(
  `
    query ArticlesIdx {
      allArticles(first: 2500) {
        ...ArticleIndexingFragment
      }
    }
  `,
  [ArticleIndexingFragment],
);

export const InsightsIdxQuery = graphql(
  `
    query InsightsIdx {
      allInsights(first: 2500) {
        ...InsightIndexingFragment
      }
    }
  `,
  [InsightIndexingFragment],
);

export const StoriesIdxQuery = graphql(
  `
    query StoriesIdx {
      allStoryItems(first: 2500) {
        ...StoryIndexingFragment
      }
    }
  `,
  [StoryIndexingFragment],
);

export const NewsIdxQuery = graphql(
  `
    query NewsIdx {
      allNewsItems(first: 2500) {
        ...NewsIndexingFragment
      }
    }
  `,
  [NewsIndexingFragment],
);

export const WebinarsIdxQuery = graphql(
  `
    query WebinarsIdx {
      allWebinarItems(first: 2500) {
        ...WebinarIndexingFragment
      }
    }
  `,
  [WebinarIndexingFragment],
);

export const ResourcesIdxQuery = graphql(
  `
    query ResourcesIdx {
      allResources(first: 2500) {
        ...ResourseIndexingFragment
      }
    }
  `,
  [ResourseIndexingFragment],
);

export const CataloguesIdxQuery = graphql(
  `
    query CataloguesIdx {
      allCatalogues(first: 2500) {
        ...CatalogueIndexingFragment
      }
    }
  `,
  [CatalogueIndexingFragment],
);

export const PagesIdxQuery = graphql(
  `
    query PagesIdx {
      allPages(first: 2500) {
        ...PageIndexingFragment
      }
    }
  `,
  [PageIndexingFragment],
);
