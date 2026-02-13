export type SectionBackground = "default" | "primary" | "dark" | "lighter";

const BACKGROUND_COLOR_MAP: Record<SectionBackground, string> = {
  default: "it-section-bg-default dark",
  primary: "it-section-bg-primary",
  dark: "it-section-bg-dark",
  lighter: "it-section-bg-light dark",
};

const BACKGROUND_HERO_COLOR_MAP: Record<SectionBackground, string> = {
  default: "it-hero-bg-default dark",
  primary: "it-hero-bg-primary",
  dark: "it-hero-bg-dark",
  lighter: "it-hero-bg-light dark",
};

export const getSectionBgClass = (
  bg: SectionBackground = "default",
): string => {
  return BACKGROUND_COLOR_MAP[bg];
};

export const getHeroBgClass = (bg: SectionBackground = "default"): string => {
  return BACKGROUND_HERO_COLOR_MAP[bg];
};
