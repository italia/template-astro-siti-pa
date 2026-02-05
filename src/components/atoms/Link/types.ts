export type LinkProps = {
  label: string;
  linkTo?: string;
  url?: string;
  icon?: string;
  openInNewTab?: boolean;
  variant?: "dark" | "light";
  titleIcon?: string;
  active?: boolean;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  isIcon?: boolean;
};
