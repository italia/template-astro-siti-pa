import type {
  CatalogueLocalesFragmentType,
  PageLocalesFragmentType,
} from "@graphql/metaFragments";
import type {
  ArticleIndexingFragmentType,
  CatalogueIndexingFragmentType,
} from "@graphql/query/indexing";
import type { SiteLocale } from "@graphql/types";

type catalogueMapCategory = { type: string[]; title?: string };
export const getCategoryName = (
  page: PageLocalesFragmentType | CatalogueLocalesFragmentType | null,
  lang: SiteLocale,
): string => {
  return (
    page?.allTitleLocales?.find((t: any) => t.locale === lang)?.value || ""
  );
};

export const resolveArticleCategory = (
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

export const getTitleByType = (
  catalogues: catalogueMapCategory[],
  searchType: string,
): string | undefined => {
  const result = catalogues.find((item) => item.type.includes(searchType));
  return result?.title;
};

export const getCataloguesMapCategory = (
  allCatalogues: CatalogueIndexingFragmentType[],
  lang: SiteLocale,
): catalogueMapCategory[] => {
  return allCatalogues.map((catalogue) => {
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
};
