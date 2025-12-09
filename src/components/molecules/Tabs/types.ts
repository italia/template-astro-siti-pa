export type TabItemProps = {
  id: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

export type TabsProps = {
  id: string;
  items: TabItemProps[];
  variant?: VariantTabsProps;
};

export type VariantTabsProps = "light" | "dark";
