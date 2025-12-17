import type { ChartFragmentType } from "../../../graphql/commonFragments";
import type { ImageProps } from "../../atoms/Image/types";
import type { CardEditorialNewsProps } from "../../molecules/CardEditorialNews/types";
import type { ListItemProps } from "../../molecules/List/types";
import type { StatisticsBoxProps } from "../../molecules/StatisticsBox/types";

export type HighlightsProps = {
  title: string;
  paragraph: string;
  image: ImageProps;
  cards?: StatisticsBoxProps[];
};

export type PanelProps = {
  title: string;
  paragraph: string;
  chart?: ChartFragmentType;
};

export type ResultProps = {
  title: string;
  paragraph: string;
  items: ListItemProps[];
  label: string;
  news: CardEditorialNewsProps[];
};
