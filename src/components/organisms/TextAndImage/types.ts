import type { CardEditorialWithIconProps } from "../../molecules/CardEditorialWithIcon/types";

export type TextAndImageProps = {
  title: string;
  paragraph: string;
  labelButton?: string;
  imgUrl: string;
  imgTitle?: string;
  imgAlt?: string;
  variant?: "default" | "big" | "withBox";
  labelCards?: string;
  cards?: CardEditorialWithIconProps[];
};
