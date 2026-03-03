import type { ChipLinkProps } from "@components/atoms/Chip/types";
import type { LinkProps } from "@components/atoms/Link/types";

export type FooterLogoProps = {
  label: string;
  mainLogo: string;
  brandLogo: string;
  linkTo: string;
  ariaLabel?: string;
};

export type FooterSmallPrintsProps = {
  links: LinkProps[];
};

export type FooterBrandProps = {
  heading: string;
  logos: FooterLogoProps[];
};

export type FooterTopicsProps = {
  title: string;
  items: ChipLinkProps[];
};

export type FooterUtilityProps = {
  title: string;
  socialItems: FooterLinkProps[];
  linkItems: LinkProps[];
};

export type FooterLinkProps = {
  icon?: string;
  label: string;
  url: string;
};
