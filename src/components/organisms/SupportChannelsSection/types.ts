import type { CardPresentationBannerProps } from "@components/molecules/CardPresentationBanner/types";

export type SupportChannelSectionProps = {
  title: string;
  paragraph: string;
  channels: CardPresentationBannerProps[];
  background?: SupportChannelSectionBackgroundProps;
};

export type SupportChannelSectionBackgroundProps = "default" | "lighter";
