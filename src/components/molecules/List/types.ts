export type ListProps = {
  items: ListItemProps[];
  variant?: VariantListProps;
};

export type ListItemProps = {
  title: string;
  paragraph: string;
};

export type VariantListProps = "small" | "default";
