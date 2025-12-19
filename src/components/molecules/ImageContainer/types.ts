import type { ImageProps } from "../../atoms/Image/types";

export type RatioImageProps = "4x3" | "1x1" | "16x9";

export type ImageWithRatioProps = {
  ratio?: RatioImageProps;
  image: ImageProps;
};
