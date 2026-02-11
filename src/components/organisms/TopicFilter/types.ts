import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";

export type TopicFilterProps = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  contentCollection: ContentCollectionProps[];
  ariaLabelTopic: string;
};

export type ContentCollectionProps = {
  topicSlug: string;
  title: string;
  paragraph?: string;
  items: CardEditorialNewsProps[];
};
