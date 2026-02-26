import type {
  HeaderNavbarProps,
  MenuItemProps,
} from "@components/organisms/Header/types";
import type {
  ExternalLinkFragmentType,
  MegaMenuItemFragmentType,
  MenuItemFragmentType,
} from "@graphql/fragment/commonFragments";
import type { SiteLocale } from "@graphql/types";
import { linkResolver } from "@utils/linkResolver";

function menuItemAdapter(
  item: MenuItemFragmentType | MegaMenuItemFragmentType,
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

  const result: MenuItemProps = {
    id: item.id,
    title: item.title,
    url: finalHref,
    active: isActive,
  };

  if ("subMenu" in item) {
    result.image = item.image;
    result.caption = item.caption;
    result.subtitle = item.subtitle;
    result.subMenuItems = item.subMenu?.map((menu) =>
      menuItemAdapter(menu, currentPath, locale),
    );
  }

  return result;
}

function metaMenuItemAdapter(
  item: ExternalLinkFragmentType,
  currentPath: string,
): MenuItemProps {
  const finalHref = item.url;

  const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
  const normalizedMenu = finalHref.replace(/\/$/, "") || "/";

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
  mainItems: (MegaMenuItemFragmentType | MenuItemFragmentType)[] = [],
  secondaryItems: (MegaMenuItemFragmentType | MenuItemFragmentType)[] = [],
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
