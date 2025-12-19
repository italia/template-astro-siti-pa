import type { CardPresentationBannerProps } from "@components/molecules/CardPresentationBanner/types";

export type SupportChannelSectionProps = {
  title: string;
  paragraph: string;
  channels: CardPresentationBannerProps[];
  variant?: SupportChannelSectionVariantProps;
};

export type SupportChannelSectionVariantProps = "default" | "lighter";
