export function createBreadcrumb(pathname: string, sitename: string) {
  const allSegments = pathname.split("/").filter(Boolean);
  const segmentsWithoutLang = allSegments.slice(1);

  const breadcrumbs = segmentsWithoutLang.map((segment, index) => {
    const linkTo = `/${allSegments.slice(0, index + 2).join("/")}`;

    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return { label, linkTo, active: false, id: label };
  });

  const homeHref = allSegments[0] ? `/${allSegments[0]}` : "/";

  const items = [
    { label: sitename, id: sitename, linkTo: homeHref, active: false },
    ...breadcrumbs,
  ];
  items[items.length - 1].active = true;
  return items;
}
