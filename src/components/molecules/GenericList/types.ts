export type GenericListProps = {
  items: GenericListItemProps[];
  label?: string;
  size?: GenericListSizeProps;
  variant?: GenericListVariantProps;
  bordered?: boolean;
};

export type GenericListItemProps = {
  text: string;
  subtext?: string;
  avatar?: string;
  icon?: string;
  iconRight?: string;
  linkTo?: string;
};

export type GenericListSizeProps = "default" | "bold" | "small";
export type GenericListVariantProps = "light" | "dark";
