import type { MenuItemsProps } from "../components/organisms/Header/types";
import type { MenuItemFragmentType } from "../graphql/commonFragments";
import type { SiteLocale } from "../graphql/types";

export function createMenu(
  datoItems: MenuItemFragmentType[],
  currentPathname: string,
  currentLocale: SiteLocale,
): MenuItemsProps[] {
  if (!datoItems || datoItems.length === 0) {
    return [];
  }

  const normalizedCurrentPath = currentPathname.replace(/\/$/, "");

  return datoItems.map((item) => {
    const lang = currentLocale;
    const pageSlug = item.pointsTo?.slug;

    let finalHref: string;
    if (!pageSlug || pageSlug === "") {
      finalHref = `/${lang}`;
    } else {
      finalHref = `/${lang}/${pageSlug}`;
    }

    const normalizedMenuHref = finalHref.replace(/\/$/, "");

    const isActive = normalizedMenuHref === normalizedCurrentPath;

    return {
      id: item.id,
      title: item.title,
      url: finalHref,
      active: isActive,
    };
  });
}
