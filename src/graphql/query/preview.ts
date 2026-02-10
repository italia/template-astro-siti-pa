import { ArticleContentFragment } from "@graphql/fragment/article";
import { CatalogueContentFragment } from "@graphql/fragment/catalogue";
import { TagFragment } from "@graphql/fragment/commonFragments";
import { InsightContentFragment } from "@graphql/fragment/insight";
import { PageContentFragment } from "@graphql/fragment/page";
import { StoryContentFragment } from "@graphql/fragment/story";
import { WebinarContentFragment } from "@graphql/fragment/webinar";
import { graphql } from "@graphql/graphql";

export const PageByIdQuery = graphql(
  `
    query PageById($id: ItemId!, $locale: SiteLocale!) {
      page(filter: { id: { eq: $id } }, locale: $locale) {
        id
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...PageContentFragment
        }
      }
    }
  `,
  [PageContentFragment, TagFragment],
);

export const CatalogueByIdQuery = graphql(
  `
    query CatalogueById($id: ItemId!, $locale: SiteLocale!) {
      catalogue(filter: { id: { eq: $id } }, locale: $locale) {
        id
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...CatalogueContentFragment
        }
      }
    }
  `,
  [CatalogueContentFragment, TagFragment],
);

export const ArticleByIdQuery = graphql(
  `
    query ArticleByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      article(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...ArticleContentFragment
        }
      }
    }
  `,
  [ArticleContentFragment, TagFragment],
);

export const WebinarByIdQuery = graphql(
  `
    query WebinarByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      webinarItem(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...WebinarContentFragment
        }
      }
    }
  `,
  [WebinarContentFragment, TagFragment],
);

export const InsightByIdQuery = graphql(
  `
    query InsightByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      insight(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...InsightContentFragment
        }
      }
    }
  `,
  [InsightContentFragment, TagFragment],
);

export const StoryItemByIdQuery = graphql(
  `
    query StoryItemByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      storyItem(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...StoryContentFragment
        }
      }
    }
  `,
  [StoryContentFragment, TagFragment],
);
