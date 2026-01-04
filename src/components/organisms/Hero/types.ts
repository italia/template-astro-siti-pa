import type { ImageProps } from "@components/atoms/Image/types";
import type { SectionBackground } from "@components/layout/SplitContent/SplitContent.astro";

export type HeroProps = {
  title: string;
  paragraph: string;
  image: ImageProps;
  size?: HeroSizeProps;
  category?: string;
  showBreadcrumb?: boolean;
  variant?: HeroVariantProps;
  backgroundColor?: SectionBackground;
};

export type HeroSizeProps = "xsmall" | "small" | "default";
export type HeroVariantProps =
  | "default"
  | "small"
  | "xsmall-full"
  | "xsmall-compact";
