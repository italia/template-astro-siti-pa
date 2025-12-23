import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";

export type TopicFilterProps = {
  title: string;
  paragraph: string;
  contentCollection: ContentCollectionProps[];
};

export type ContentCollectionProps = {
  title: string;
  paragraph: string;
  items: CardEditorialNewsProps[];
};
