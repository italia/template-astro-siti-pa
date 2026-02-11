export type ListLinkProps = {
  items: ListLinkItemProps[];
  variant?: ListLinkVariantProps;
};

export type ListLinkItemProps = {
  text: string;
  iconRight?: string;
  linkTo?: string;
  openInNewTab?: boolean;
  ariaLabelLink?: string;
};

export type ListLinkVariantProps = "light" | "dark";
