import { ImageFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";

export const ErrorPageQuery = graphql(
  `
    query ErrorPage($locale: SiteLocale!) {
      globalSetting(locale: $locale) {
        title
        paragraph(markdown: true)
        image {
          ...ImageFragment
        }
        labelCta
      }
      homepage {
        id
      }
    }
  `,
  [ImageFragment],
);
