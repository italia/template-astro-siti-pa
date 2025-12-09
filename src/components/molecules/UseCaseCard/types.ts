import type { ImageProps } from "../../atoms/Image/types";
import type { TopicsProps } from "../Topics/types";

export type UseCaseCardProps = {
  title: string;
  paragraph: string;
  linkTo: string;
  image: ImageProps;
  listTopics?: TopicsProps;
  descriptionTitle?: string;
  description?: string;
  variant?: VariantUseCardProps;
};

export type VariantUseCardProps = "default" | "big";
