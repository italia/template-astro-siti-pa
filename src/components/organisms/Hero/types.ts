import type { ImageProps } from "@components/atoms/Image/types";
import type { SectionBackground } from "@utils/background";

export type HeroProps = {
  title: string;
  image?: ImageProps;
  imageMobile?: ImageProps;
  paragraph?: string;
  showBreadcrumb?: boolean;
  variant?: HeroVariantProps;
  backgroundColor?: SectionBackground;
  bgClass?: string;
};

export type HeroSizeProps = "xsmall" | "small" | "default";
export type HeroVariantProps =
  | "default"
  | "small"
  | "xsmall-full"
  | "xsmall-compact";
