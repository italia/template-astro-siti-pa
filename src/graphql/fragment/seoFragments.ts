import { ImageFragment } from "@graphql/fragment/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const SeoFieldFragment = graphql(
  `
    fragment SeoFieldFragment on SeoField @_unmask {
      title
      description
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type SeoFieldFragmentType = FragmentOf<typeof SeoFieldFragment>;
