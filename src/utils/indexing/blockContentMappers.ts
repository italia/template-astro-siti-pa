import type { StructuredTextFragmentType } from "@graphql/sectionFragments";
import type {
  ArticleContentFragmentType,
  InsightContentFragmentType,
  StoryContentFragmentType,
  WebinarContentFragmentType,
} from "@graphql/templateFragments";
import { render } from "datocms-structured-text-to-plain-text";

type AllStructuredTextBlocks =
  | ArticleContentFragmentType["blocks"][number]
  | StructuredTextFragmentType["blocks"][number];

export const getSearchRenderOptions = () => ({
  renderBlock({ record }: { record: AllStructuredTextBlocks }) {
    switch (record.__typename) {
      case "ImageBlockRecord":
        return record.image?.alt || "";
      case "CalloutRecord":
        return `"${record.title}" - ${record.paragraph}`;
      case "ListCardEditorialWithIconRecord":
        return (
          record.items
            ?.map((item) => `${item.title} ${item.description}`)
            .join(" ") || ""
        );
      case "ListCardInfoRecord":
      case "OrderedListRecord":
        return (
          record.items
            ?.map((item) => `${item.title} ${item.paragraph}`)
            .join(" ") || ""
        );
      case "QuickLinkCardRecord":
        return `${record.title} ${record.links?.map((l) => `${l.label} ${l.description || ""}`).join(" ")}`.trim();
      case "TopicsBlockRecord":
        return `${record.title} ${record.topics?.map((t) => t.label).join(" ")}`.trim();
      case "ExternalLinkRecord":
        return `${record.label} ${record.description || ""}`.trim();
      case "SupportCtaSectionRecord":
        return `${record.title} ${record.paragraph}`.trim();
      case "ListBlockquoteRecord":
        return (
          record.items
            .map((item) => `${item.paragraph}-${item.author} `)
            .join(" ") || ""
        );
      default:
        console.warn(`Not implemented yet: ${record.__typename}`);
        return "";
    }
  },
});

type BlockType =
  | InsightContentFragmentType
  | StoryContentFragmentType
  | WebinarContentFragmentType;
export const flattenBlocks = (blocks: BlockType[] | undefined | null) => {
  if (!blocks) return "";
  const stOptions = getSearchRenderOptions();
  return blocks
    .map((block) => {
      switch (block.componentName) {
        case "HeroRecord":
          return `${block.title} ${block.paragraph || ""}`;
        case "FaqSectionRecord":
          const faqTitle = block.title;
          const questionList = block.accordion.items
            .map((question) => `${question.header} ${question.body}`)
            .join(" ");

          return `${faqTitle} ${questionList}`.trim();
        case "IntroArticleRecord":
          const introTitle = `${block.text.title} ${block.text.paragraph}`;
          const resultList = block.list?.items?.items
            .map((item) => `${item.label}`)
            .join(" ");

          return `${introTitle} ${resultList}`.trim();
        case "ActionCardRecord":
          return `${block.title} ${block.paragraph} ${block.cta.label} ${block.cta.description || ""}`;
        case "SpeakerRecord":
          const speakerTitle = `${block.text.title} ${block.text.paragraph}`;
          const speakerList = block.list?.authors
            .map((item) => `${item.name} ${item.role}`)
            .join(" ");

          return `${speakerTitle} ${speakerList}`.trim();
        case "WebinarDescriptionRecord":
          const webinarTitle = `${block.text.title} ${block.text.paragraph}`;
          const webinarList = block.subjects.items
            .map((item) => `${item.title} ${item.paragraph}`)
            .join(" ");
          const webinarResourses = block.resourses?.links
            .map((item) => `${item.label} ${item.description || ""}`)
            .join(" ");

          return `${webinarTitle} ${webinarList} ${webinarResourses}`.trim();
        case "SupportCtaSectionRecord":
          return `${block.title} ${block.paragraph}`.trim();
        case "StructuredTextRecord":
          return render(block.textContent, stOptions);
        default:
          return "";
      }
    })
    .join(" ");
};
