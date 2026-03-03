type IconProps = {
  icon: string; // url of icon 'sprites.svg#it-tool'
  size?: SizeIconProps;
  padded?: boolean;
  bg?: BgIconProps;
  align?: AlignIconProps;
  color?: ColorIconProps;
  hidden?: boolean;
  addonClasses?: string;
  ariaLabel?: string;
};

export type SizeIconProps = "xs" | "sm" | "lg" | "xl";
export type BgIconProps = "light" | "dark";
export type AlignIconProps = "bottom" | "middle" | "top";
export type ColorIconProps =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "white";

function Icon({
  icon,
  size,
  padded,
  bg,
  align,
  color,
  hidden,
  addonClasses,
  ariaLabel,
}: IconProps) {
  const styles =
    "icon" +
    `${padded ? " icon-padded" : ""}` +
    `${size ? ` icon-${size}` : ""}` +
    `${bg ? ` bg-${bg}` : ""}` +
    `${align ? ` align-${align}` : ""}` +
    `${color ? ` icon-${color}` : ""}` +
    `${addonClasses ? ` ${addonClasses}` : ""}`;

  return (
    <svg
      role="img"
      className={styles}
      aria-hidden={hidden}
      aria-label={ariaLabel}
    >
      <use href={`/bsi-svg/${icon}`} />
    </svg>
  );
}

export default Icon;
