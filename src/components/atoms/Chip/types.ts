export type ChipLinkProps = {
  label: string;
  visuallyHidden: string;
  linkTo: string;
  disabled?: boolean;
  variant?: VariantChipProps;
  size?: SizeChipProps;
};

export type ChipProps = {
  label: string;
  visuallyHidden: string;
  disabled?: boolean;
  variant?: VariantChipProps;
  size?: SizeChipProps;
};

export type VariantChipProps = "primary" | "standard" | "outline-white";

export type SizeChipProps = "default" | "large";
