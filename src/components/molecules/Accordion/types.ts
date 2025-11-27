export type AccordionProps = {
  id: string;
  items: AccordionItemProps[];
  variant?: "default" | "background-active";
};

export type AccordionItemProps = {
  header: string;
  body: string;
  id: string;
};
