import type { ImageProps } from "../../atoms/Image/types";
import type { CardEditorialWithIconProps } from "../../molecules/CardEditorialWithIcon/types";

export type TextAndImageProps = {
  title: string;
  paragraph: string;
  labelButton?: string;
  image: ImageProps;
  variant?: TextAndImageVariantProps;
  labelCards?: string | null;
  cards?: CardEditorialWithIconProps[];
};

export type TextAndImageVariantProps = "default" | "big" | "withBox";
