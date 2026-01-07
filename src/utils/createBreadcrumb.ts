import { getBreadcrumbs, linkResolver } from "@data/linkMap";
import type { SiteLocale } from "@graphql/types";

export function createBreadcrumb(id: string, locale: SiteLocale) {
  const steps = getBreadcrumbs(id, locale);

  if (!steps.length) {
    return [];
  }

  const breadcrumbs = steps.map((step) => {
    const linkTo = linkResolver(step.id, locale);

    const label = step.title;

    return { label, linkTo, active: false, id: label };
  });

  breadcrumbs[breadcrumbs.length - 1].active = true;
  return breadcrumbs;
}
