import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";
import { linkResolver } from "@utils/linkResolver";

type BaseCta = {
  componentName: string;
  label: string;
  url?: string;
  linkTo?: {
    id: string;
  };
};

export const getCtaFields = (cta: BaseCta | null, lang: SiteLocale) => {
  if (!cta) return { labelButton: undefined, linkTo: undefined };

  switch (cta.componentName) {
    case DatoBlockModel.ExternalLink:
      return {
        labelButton: cta.label,
        linkTo: cta.url,
      };
    case DatoBlockModel.InternalLink:
      return {
        labelButton: cta.label,
        linkTo: linkResolver(cta.linkTo?.id, lang),
      };
    default:
      return {
        labelButton: undefined,
        linkTo: undefined,
      };
  }
};
