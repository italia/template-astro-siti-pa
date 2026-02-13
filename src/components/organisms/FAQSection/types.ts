import type { AccordionProps } from "@components/molecules/Accordion/types";
import type { SectionBackground } from "@utils/background";

export type FAQSectionProps = {
  title: string;
  accordion: AccordionProps;
  background?: SectionBackground;
};
