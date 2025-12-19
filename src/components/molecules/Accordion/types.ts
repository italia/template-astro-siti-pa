export type AccordionProps = {
  id: string;
  items: AccordionItemProps[];
  variant?: VariantAccordionProps;
  label?: string;
};

export type AccordionItemProps = {
  header: string;
  body: string;
  id: string;
};

export type VariantAccordionProps = "default" | "background-active";
