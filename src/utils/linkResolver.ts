import rawLinkMap from "@data/linkMap.json";
import rawLinkMapPreview from "@data/linkMapPreview.json";
import type { SiteLocale } from "@graphql/types";

export type BreadcrumbStep = {
  title: string;
  id: string;
};

export type PageRouteInfo = {
  path: string;
  breadcrumb?: BreadcrumbStep[];
};

export type SiteMap = Record<
  string,
  Partial<Record<SiteLocale, PageRouteInfo>>
>;

const linkMap = rawLinkMap as SiteMap;
const linkMapPreview = rawLinkMapPreview as SiteMap;

export function linkResolver(
  id: string | undefined,
  locale: string,
  isPreview: boolean = false,
): string {
  const map = isPreview ? linkMapPreview : linkMap;

  if (!id || !(id in map)) {
    return "#";
  }

  return map[id][locale as SiteLocale]?.path || "#";
}

export function getBreadcrumbs(id: string | undefined, locale: string) {
  if (!id || !(id in linkMap)) {
    return [];
  }
  return linkMap[id][locale as SiteLocale]?.breadcrumb || [];
}
