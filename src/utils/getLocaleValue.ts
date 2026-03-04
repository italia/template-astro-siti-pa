import type { SiteLocale } from "@graphql/types";

type LocalizedField = {
  locale: SiteLocale | null;
  value: any;
};

export function getLocaleValue(
  field: LocalizedField[] | undefined | null,
  lang: string,
  fallback: string | null = "",
) {
  if (!field || !Array.isArray(field)) return fallback;
  const entry = field.find((f) => f.locale === lang);
  return entry ? entry.value : fallback;
}
