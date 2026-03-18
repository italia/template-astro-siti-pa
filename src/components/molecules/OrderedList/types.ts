import type { LinkProps } from "@components/atoms/Link/types";

export type ListProps = {
  items: ListItemProps[];
  variant?: VariantListProps;
};

export type ListItemProps = {
  title: string;
  paragraph: string;
  resources?: {
    title: string;
    links: LinkProps[];
  };
};

export type VariantListProps = "small" | "default";
