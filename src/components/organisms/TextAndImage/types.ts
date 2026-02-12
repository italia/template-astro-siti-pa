import type { SectionBackground } from "@components/layout/SplitContent/types";

export type TextAndImageProps = {
  background: SectionBackground;
  variant: VariantTextAndImageProps;
};

export type VariantTextAndImageProps = "variant-1" | "variant-2" | "variant-3";
