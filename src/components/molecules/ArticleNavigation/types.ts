export type ArticleNavigationProps = {
  previousArticle?: {
    title: string;
    url: string;
  };
  previousLabel?: string;
  nextArticle?: {
    title: string;
    url: string;
  };
  nextLabel?: string;
};
