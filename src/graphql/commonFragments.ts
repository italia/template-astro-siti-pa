import { graphql, type FragmentOf } from "../graphql/graphql";

export const TagFragment = graphql(`
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`);

export const LocaleFragment = graphql(`
  fragment LocaleFragment on StringNonNullMultiLocaleField @_unmask {
    locale
    value
  }
`);

export type LocaleFragmentType = FragmentOf<typeof LocaleFragment>;

export const ChartFragment = graphql(`
  fragment ChartFragment on SettingsChartRecord @_unmask {
    downloadData
    downloadImage
    footerText
    id
    selectChart {
      chartData
      id
      title
    }
    showShare
    subtitle
    title
    info
  }
`);

export type ChartFragmentType = FragmentOf<typeof ChartFragment>;

export const KpiFragment = graphql(`
  fragment KpiFragment on SettingsKpiRecord @_unmask {
    title
    subtitle
    selectKpi {
      value_suffix: valueSuffix
      value_prefix: valuePrefix
      value
      title
      show_flow: showFlow
      percentage
      id
      footer_text: footerText
      flow_value: flowValue
      flow_direction: flowDirection
      flow_detail: flowDetail
      background_color: backgroundColor
    }
    id
  }
`);

export type KpiFragmentType = FragmentOf<typeof KpiFragment>;
