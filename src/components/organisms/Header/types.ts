import type { ImageProps } from "@components/atoms/Image/types";

type HeaderBase = {
  linkBackHome: string;
  variant?: VariantHeaderProps;
};

export type HeaderCentralProps = HeaderBase & {
  brandTitle: string;
  brandTagLine?: string;
  menuItems: HeaderNavbarProps;
  logo: string;
  search?: SearchConfig;
};

export type HeaderSlimProps = HeaderBase & {
  brandList?: { url: string; label: string; shortLabel: string }[];
  locales: string[];
  metaNav?: MenuItemProps[];
};

export type HeaderProps = HeaderCentralProps & HeaderSlimProps;

export type SearchConfig = {
  isEnabled: boolean;
  label?: string;
  url: string;
};

export type MenuItemProps = {
  id: string;
  url: string;
  active: boolean;
  title: string;
  image?: ImageProps;
  caption?: string;
  subtitle?: string;
  subMenuItems?: MenuItemProps[];
};

export type HeaderNavbarProps = {
  left: MenuItemProps[];
  right?: MenuItemProps[];
};

export type VariantHeaderProps = "dark" | "light";
