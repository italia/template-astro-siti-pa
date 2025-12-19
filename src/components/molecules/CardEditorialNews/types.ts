import type { ImageProps } from "../../atoms/Image/types";

export type CardEditorialNewsProps = {
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string | null;
  dateTime?: string | null;
  action?: string | null;
  fullHeight?: boolean;
};
