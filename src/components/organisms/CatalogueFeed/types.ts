export type PageNewsTab = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  newsPageTabType: string;
  perPage?: number;
};

export type UpdateTabSectionProps = {
  id: string;
  tabs: PageNewsTab[];
};

export type ElementType = "news" | "story" | "webinar" | "resource";
