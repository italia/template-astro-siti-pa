import type {
  HeaderNavbarProps,
  MenuItemProps,
} from "@components/organisms/Header/types";
import type {
  ExternalLinkFragmentType,
  MenuItemFragmentType,
} from "@graphql/fragment/commonFragments";
import type { SiteLocale } from "@graphql/types";
import { linkResolver } from "@utils/linkResolver";

function menuItemAdapter(
  item: MenuItemFragmentType,
  currentPath: string,
  locale: SiteLocale,
): MenuItemProps {
  const pageId = item.pointsTo.id;
  const finalHref = linkResolver(pageId, locale);

  const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
  const normalizedMenu = finalHref.replace(/\/$/, "") || "/";

  const isActive =
    normalizedMenu === "/"
      ? normalizedCurrent === "/"
      : normalizedCurrent.startsWith(normalizedMenu);

  return {
    id: item.id,
    title: item.title,
    url: finalHref,
    active: isActive,
  };
}

function metaMenuItemAdapter(
  item: ExternalLinkFragmentType,
  currentPath: string,
): MenuItemProps {
  const finalHref = item.url;

  const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
  const normalizedMenu = finalHref.replace(/\/$/, "") || "/";

  console.log("norma", normalizedMenu, currentPath);

  const isActive =
    normalizedMenu === "/"
      ? normalizedCurrent === "/"
      : normalizedCurrent.startsWith(normalizedMenu);

  return {
    id: item.id,
    title: item.label,
    url: finalHref,
    active: isActive,
  };
}

export function createMenu(
  mainItems: MenuItemFragmentType[] = [],
  secondaryItems: MenuItemFragmentType[] = [],
  currentPathname: string,
  currentLocale: SiteLocale,
): HeaderNavbarProps {
  return {
    left: mainItems.map((item) =>
      menuItemAdapter(item, currentPathname, currentLocale),
    ),
    right: secondaryItems.map((item) =>
      menuItemAdapter(item, currentPathname, currentLocale),
    ),
  };
}

export function createMetaMenu(
  metaNavigation: ExternalLinkFragmentType[] = [],
  currentPathname: string,
): MenuItemProps[] {
  return metaNavigation.map((item) =>
    metaMenuItemAdapter(item, currentPathname),
  );
}
