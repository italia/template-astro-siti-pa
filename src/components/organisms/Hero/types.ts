import type { ImageProps } from "@components/atoms/Image/types";

export type HeroProps = {
  title: string;
  paragraph: string;
  image: ImageProps;
  size?: HeroSizeProps;
  category?: string;
  showBreadcrumb?: boolean;
};

export type HeroSizeProps = "xsmall" | "small" | "default";
