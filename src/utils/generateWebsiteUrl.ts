import type { SchemaTypes } from "@datocms/cma-client";
import type { pageReferencesUrl, SiteLocale } from "../graphql/types";
import { executeQuery } from "../lib/datocms";
import { AllPagesSlugQuery } from "./query";

type LocalizedSchemaTypesItem = SchemaTypes.Item & {
  attributes: SchemaTypes.Item["attributes"] & {
    slug: Record<SiteLocale, string>;
  };
};

export function generateWebsiteUrl(
  item: LocalizedSchemaTypesItem,
  locale: SiteLocale,
): string | null {
  if (!item || !locale) {
    return null;
  }

  if (typeof item.attributes.slug !== "object") {
    throw new Error("Item slug is not localized");
  }

  const slug = item.attributes.slug[locale];
  return `/${locale}/${slug}`;
}

export const buildUrl = (
  locale: SiteLocale,
  path: string,
  isDraftMode: boolean,
) => {
  return `/${locale}/${path}${isDraftMode ? "/preview" : ""}`;
};

export async function buildPageRefByLocales(
  currentLang: SiteLocale,
  currentSlug: string,
  isDraftMode: boolean,
): Promise<pageReferencesUrl> {
  const slugsResponse = await executeQuery(AllPagesSlugQuery);
  const pageReferences = {} as pageReferencesUrl;
  slugsResponse.allPages.forEach((page) => {
    const pageFound = page.allSlugLocales?.find(
      (item) => item.value === currentSlug && item.locale === currentLang,
    );
    if (pageFound) {
      page.allSlugLocales?.forEach((item) => {
        if (item.locale && item.value) {
          pageReferences[item.locale] = buildUrl(
            item.locale,
            item.value,
            isDraftMode,
          );
        }
      });
    }
  });
  return pageReferences;
}
