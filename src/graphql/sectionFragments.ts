import {
  AccordionBlockFragment,
  AccordionFragment,
  CardEditorialNewsFragment,
  ChannelFragment,
  ChartFragment,
  ImageBlockFragment,
  ImageFragment,
  ListItemFragment,
  MenuItemFragment,
  NewsTabFragment,
  StatisticBlockFragment,
  StatisticsBoxFragment,
  StoryTabFragment,
  TextBlockFragment,
  UseCaseBlockFragment,
} from "@graphql/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const HeroFragment = graphql(
  `
    fragment HeroFragment on HeroRecord @_unmask {
      id
      paragraph(markdown: true)
      size
      title
      category
      showBreadcrumb
      backgroundImage {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type HeroFragmentType = FragmentOf<typeof HeroFragment>;

export const NewsFeedFragment = graphql(
  `
    fragment NewsFeedFragment on NewsFeedRecord @_unmask {
      id
      title
      paragraph
      tabs {
        ... on RecordInterface {
          componentName: __typename
        }
        ... on NewsTabRecord {
          ...NewsTabFragment
        }
        ... on StoryTabRecord {
          ...StoryTabFragment
        }
      }
    }
  `,
  [StoryTabFragment, NewsTabFragment],
);

export type NewsFeedFragmentType = FragmentOf<typeof NewsFeedFragment>;

export const SupportChannelsSectionFragment = graphql(
  `
    fragment SupportChannelsSectionFragment on SupportChannelsSectionRecord
    @_unmask {
      id
      paragraph(markdown: true)
      title
      channels {
        ...ChannelFragment
      }
      variant
    }
  `,
  [ChannelFragment],
);

export type SupportChannelsSectionFragmentType = FragmentOf<
  typeof SupportChannelsSectionFragment
>;

export const SectionFragment = graphql(
  `
    fragment SectionFragment on SectionRecord @_unmask {
      id
      columnLeftSize
      columnRightSize
      background
      alignItems
      additionalContent {
        title
        id
        content {
          title
          id
          icon
          description
        }
      }
      left {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on TextBlockRecord {
          ...TextBlockFragment
        }
      }
      right {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on UseCaseBlockRecord {
          ...UseCaseBlockFragment
        }
        ... on StatisticBlockRecord {
          ...StatisticBlockFragment
        }
        ... on ImageBlockRecord {
          ...ImageBlockFragment
        }
        ... on AccordionBlockRecord {
          ...AccordionBlockFragment
        }
      }
    }
  `,
  [
    TextBlockFragment,
    UseCaseBlockFragment,
    StatisticBlockFragment,
    ImageBlockFragment,
    AccordionBlockFragment,
  ],
);

export type SectionFragmentType = FragmentOf<typeof SectionFragment>;

export const HeaderFragment = graphql(
  `
    fragment HeaderFragment on LayoutRecord @_unmask {
      navigationBar {
        ... on MenuItemRecord {
          ...MenuItemFragment
        }
      }
      tagline
      organization
      siteName
    }
  `,
  [MenuItemFragment],
);

export type HeaderFragmentType = FragmentOf<typeof HeaderFragment>;

export const FaqSectionRecordFragment = graphql(
  `
    fragment FaqSectionRecordFragment on FaqSectionRecord @_unmask {
      id
      title
      accordion {
        ...AccordionFragment
      }
    }
  `,
  [AccordionFragment],
);

export type FaqSectionRecordFragmentType = FragmentOf<
  typeof FaqSectionRecordFragment
>;

export const DataSectionRecordFragment = graphql(
  `
    fragment DataSectionRecordFragment on DataSectionRecord @_unmask {
      id
      highlights {
        id
        cards {
          ...StatisticsBoxFragment
        }
        image {
          ...ImageFragment
        }
        paragraph(markdown: true)
        title
      }
      panel {
        id
        paragraph
        title
        chart {
          ...ChartFragment
        }
      }
      result {
        id
        title
        paragraph
        label
        items {
          ...ListItemFragment
        }
        news {
          ...CardEditorialNewsFragment
        }
      }
    }
  `,
  [
    ChartFragment,
    CardEditorialNewsFragment,
    ImageFragment,
    StatisticsBoxFragment,
    ListItemFragment,
  ],
);

export type DataSectionRecordFragmentType = FragmentOf<
  typeof DataSectionRecordFragment
>;
