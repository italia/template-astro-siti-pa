export type SidebarProps = {
  header: string;
  openLabel: string;
  closeLabel: string;
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
