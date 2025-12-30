import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";
import type { NewsItemFragmentType } from "@graphql/commonFragments";

export const mapNewsToCardEditorialNewsProps = (
  news: NewsItemFragmentType,
): CardEditorialNewsProps => ({
  title: news.title,
  description: news.paragraph,
  image: news.image,
  linkTo: news.link,
  category: news.category,
  dateTime: news.dateOfPublication,
  action: new URL(news.link).host,
});
