import type { CardEditorialNewsProps } from "@components/react/CardEditorialNews";
import type { CardEditorialInlineMiniProps } from "@components/react/CardEditorialInlineMini/CardEditorialInlineMini";
import type {
  NewsItemFragmentType,
  StoryItemFragmentType,
} from "@graphql/commonFragments";
import { linkResolver } from "@data/linkMap";

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

export const mapStoryToCardEditorialInlineMiniProps = (
  story: StoryItemFragmentType,
  lang: string,
): CardEditorialInlineMiniProps => ({
  title: story.title,
  image: story.image,
  linkTo: linkResolver(story.id, lang),
  category: story.category,
  dateTime: story.dateOfPublication,
  description: "",
});
