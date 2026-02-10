import {
  CalloutFragment,
  ExternalLinkFragment,
  ImageBlockFragment,
  ListBlockquoteFragment,
  ListCardEditorialWithIconFragment,
  ListCardInfoFragment,
  OrderedListFragment,
  QuickLinkCardFragment,
  RelatedArticleFragment,
  TopicsBlockFragment,
} from "@graphql/fragment/commonFragments";
import { SupportCTASectionFragment } from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const ArticleContentFragment = graphql(
  `
    fragment ArticleContentFragment on ArticleModelContentField @_unmask {
      value
      blocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on ListCardEditorialWithIconRecord {
          ...ListCardEditorialWithIconFragment
        }
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
        ... on OrderedListRecord {
          ...OrderedListFragment
        }
        ... on CalloutRecord {
          ...CalloutFragment
        }
        ... on QuickLinkCardRecord {
          ...QuickLinkCardFragment
        }
        ... on SupportCtaSectionRecord {
          ...SupportCTASectionFragment
        }
        ... on TopicsBlockRecord {
          ...TopicsBlockFragment
        }
        ... on RelatedArticleRecord {
          ...RelatedArticleFragment
        }
        ... on ImageBlockRecord {
          ...ImageBlockFragment
        }
        ... on ListBlockquoteRecord {
          ...ListBlockquoteFragment
        }
        ... on ListCardInfoRecord {
          ...ListCardInfoFragment
        }
      }
    }
  `,
  [
    ListCardEditorialWithIconFragment,
    ExternalLinkFragment,
    OrderedListFragment,
    CalloutFragment,
    QuickLinkCardFragment,
    SupportCTASectionFragment,
    TopicsBlockFragment,
    RelatedArticleFragment,
    ImageBlockFragment,
    ListBlockquoteFragment,
    ListCardInfoFragment,
  ],
);

export type ArticleContentFragmentType = FragmentOf<
  typeof ArticleContentFragment
>;
