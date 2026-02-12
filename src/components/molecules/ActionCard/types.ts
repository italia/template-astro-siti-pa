export type ActionCardProps = {
  title: string;
  paragraph: string;
  category?: string;
  cta: {
    label: string;
    url: string;
  };
  labelButtonMore: string;
  labelButtonLess: string;
};
