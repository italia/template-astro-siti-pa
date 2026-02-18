import type {
  ArticleIndexingFragmentType,
  CatalogueIndexingFragmentType,
} from "@graphql/fragment/indexing";
import type {
  CatalogueLocalesFragmentType,
  PageLocalesFragmentType,
} from "@graphql/fragment/metaFragments";
import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";

type tabType = { type: string; title: string };
type catalogueMapCategory = { type: tabType[]; title?: string };
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

export const getTitleByTypeNews = (
  catalogues: catalogueMapCategory[],
  searchType: string,
): string | undefined => {
  const catalogueMatch = catalogues.find((item) =>
    item.type.some((t) => t.type === searchType),
  );
  if (!catalogueMatch) return undefined;

  const specificType = catalogueMatch.type.find((t) => t.type === searchType);
  return `${catalogueMatch?.title}, ${specificType?.title}`;
};

export const getTitleByTypeResourse = (
  catalogues: catalogueMapCategory[],
  searchType: string,
): string | undefined => {
  const catalogueMatch = catalogues.find((item) =>
    item.type.some((t) => t.type === searchType),
  );

  return catalogueMatch?.title;
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
      (item) => item.componentName === DatoBlockModel.CatalogueFeed,
    );
    let tabTypes: tabType[] = [];
    if (feedRecord && "tabs" in feedRecord) {
      tabTypes =
        feedRecord.tabs?.map((item) => {
          return { type: item.newsPageTabType, title: item.title };
        }) || [];
    }

    return {
      type: tabTypes,
      title,
    };
  });
};
