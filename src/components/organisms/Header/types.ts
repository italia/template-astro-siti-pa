export type HeaderProps = {
  slimContent: string;
  brandTitle: string;
  brandTagLine: string;
  menuItems: MenuItemsProps[];
};

export type MenuItemsProps = {
  id: string;
  url: string;
  active: boolean;
  title: string;
};
