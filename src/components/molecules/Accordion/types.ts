export type AccordionProps = {
  id: string;
  items: AccordionItemProps[];
  variant?: VariantAccordionProps;
};

export type AccordionItemProps = {
  header: string;
  body: string;
  id: string;
};

export type VariantAccordionProps = "default" | "background-active";
