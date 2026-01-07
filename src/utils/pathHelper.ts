import type {
  AllArticlesSlugFragmentType,
  AllInsightsSlugFragmentType,
  AllPagesSlugFragmentType,
} from "@graphql/slugFragments";
import type { SiteLocale } from "../graphql/types";

interface HasLocales {
  allSlugLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
  allTitleLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
}

const getSlug = (item: HasLocales, locale: string) =>
  item?.allSlugLocales?.find((s) => s.locale === locale)?.value;
const getTitle = (item: HasLocales, locale: string) =>
  item?.allTitleLocales?.find((t) => t.locale === locale)?.value || "No title";

export function buildFullPath(
  article: AllArticlesSlugFragmentType,
  locale: SiteLocale,
  allArticles: AllArticlesSlugFragmentType[],
) {
  const steps = [];

  let current: AllArticlesSlugFragmentType | null = article;

  while (current) {
    const slug = getSlug(current, locale);
    const title = getTitle(current, locale);

    if (slug) {
      steps.unshift({
        id: current.id,
        slug: slug,
        title: title,
      });
    }

    if (!current.parent && current.parentPage) {
      const parentPageSlug = getSlug(current.parentPage, locale);
      const parentPageTitle = getTitle(current.parentPage, locale);
      if (parentPageSlug) {
        steps.unshift({
          id: current.parentPage.id,
          slug: parentPageSlug,
          title: parentPageTitle,
        });
      }
    }

    if (current.parent?.id) {
      const parentId: string = current.parent.id;
      current = allArticles.find((a) => a.id === parentId) || null;
    } else {
      current = null;
    }
  }

  const fullPath = steps.map((s) => s.slug).join("/");

  return {
    fullPath,
    steps,
  };
}

export function buildFullPathInsights(
  insigth: AllInsightsSlugFragmentType,
  locale: SiteLocale,
) {
  const steps = [];

  const slug = getSlug(insigth, locale);
  const title = getTitle(insigth, locale);

  if (slug) {
    steps.unshift({
      id: insigth.id,
      slug: slug,
      title: title,
    });
  }

  if (insigth.parentPage) {
    const parentPageSlug = getSlug(insigth.parentPage, locale);
    const parentPageTitle = getTitle(insigth.parentPage, locale);
    if (parentPageSlug) {
      steps.unshift({
        id: insigth.parentPage.id,
        slug: parentPageSlug,
        title: parentPageTitle,
      });
    }
  }
  const fullPath = steps.map((s) => s.slug).join("/");

  return {
    fullPath,
    steps,
  };
}
