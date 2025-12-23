import type { AllArticlesSlugFragmentType } from "@graphql/templateFragments";
import type { SiteLocale } from "../graphql/types";

export function buildFullPath(
  item: AllArticlesSlugFragmentType,
  locale: SiteLocale,
  allItems: AllArticlesSlugFragmentType[],
) {
  let pathSegments: string[] = [];
  let currentItem: AllArticlesSlugFragmentType | null = item;

  const itemMap = allItems.reduce(
    (map: Record<string, AllArticlesSlugFragmentType>, page) => {
      map[page.id] = page;
      return map;
    },
    {},
  );

  while (currentItem) {
    const slugLocales = currentItem.allSlugLocales;
    if (!slugLocales) {
      return;
    }

    const currentSlug = slugLocales.find((s) => s.locale === locale)?.value;

    if (currentSlug) {
      pathSegments.unshift(currentSlug);
    }

    if (currentItem.parent && currentItem.parent.id) {
      currentItem = itemMap[currentItem.parent.id];
    } else {
      currentItem = null;
    }
  }

  if (pathSegments.length === 1 && pathSegments[0] === "") {
    return "";
  }

  return pathSegments.join("/");
}
