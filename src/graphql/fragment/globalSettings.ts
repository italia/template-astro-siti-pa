import { graphql, type FragmentOf } from "@graphql/graphql";
import { ImageFragment, LocaleFragment } from "./commonFragments";

export const ErrorRecordFragment = graphql(
  `
    fragment ErrorRecordFragment on GlobalSettingRecord @_unmask {
      _allTitleLocales {
        ...LocaleFragment
      }
      _allParagraphLocales(markdown: true) {
        locale
        value
      }
      image {
        ...ImageFragment
      }
      _allLabelCtaLocales {
        ...LocaleFragment
      }
    }
  `,
  [ImageFragment, LocaleFragment],
);

export type ErrorRecordFragmentType = FragmentOf<typeof ErrorRecordFragment>;
