import { AllArticlesRecordFragment } from "@graphql/fragment/article";
import { graphql } from "@graphql/graphql";

export const AllArticlesContentQuery = graphql(
  `
    query AllArticlesContentQuery {
      allArticles {
        ...AllArticlesRecordFragment
      }
    }
  `,
  [AllArticlesRecordFragment],
);
