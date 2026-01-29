import type { CatalogueContentFragmentType } from "@graphql/templateFragments";

export const getLastUpdateCollection = (
  content: CatalogueContentFragmentType[] | undefined,
  datesRegistry: any,
) => {
  if (!content) {
    return;
  }

  const feedRecord = content?.find(
    (c) => c.componentName === "CatalogueFeedRecord",
  );
  let finalUpdateDate = null;

  if (feedRecord && feedRecord.tabs) {
    const allDates = feedRecord.tabs
      .map((tab) => {
        const type = tab.newsPageTabType;
        const dateString = datesRegistry[type as keyof typeof datesRegistry];
        return dateString ? new Date(dateString).getTime() : null;
      })
      .filter((time): time is number => time !== null);

    if (allDates.length > 0) {
      finalUpdateDate = new Date(Math.max(...allDates)).toISOString();
    }
  }

  return finalUpdateDate;
};
