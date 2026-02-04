export type NavigationLinkDirection = "previous" | "next";

export type NavigationLinkProps = {
  title: string;
  linkTo: string;
  label?: string;
  direction?: NavigationLinkDirection;
};
