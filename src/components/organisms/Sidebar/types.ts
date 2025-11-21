export type SidebarProps = {
  id: string;
  header: string;
  openLabel: string;
  closeLabel: string;
  ariaLabel: string;
  items: SidebarItemFirstLevelProps[];
};

export type SidebarItemFirstLevelProps = {
  idAccordion: string;
  label: string;
  items: SidebarItemSecondLevelProps[];
};

export type SidebarItemSecondLevelProps = {
  id: string;
  label: string;
  linkTo: string;
  active: boolean;
};
