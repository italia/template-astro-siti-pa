import type { ChipLinkProps } from "../../atoms/Chip/types";
import type { LinkProps } from "../../atoms/Link/types";

export type FooterLogoProps = {
  icon: string;
  label: string;
  linkTo: string;
  ariaLabel?: string;
};

export type FooterSmallPrintsProps = {
  labelVisualHidden: string;
  links: LinkProps[];
};

export type FooterBrandProps = {
  title: string;
  description: string;
  logos: FooterLogoProps[];
};

export type FooterTopicsProps = {
  title: string;
  items: ChipLinkProps[];
};

export type FooterUtilityProps = {
  title: string;
  items: FooterLogoProps[];
};
