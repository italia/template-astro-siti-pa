import { AllInsightsRecordFragment } from "@graphql/fragment/insight";
import { graphql } from "@graphql/graphql";

export const AllInsightsContentQuery = graphql(
  `
    query AllInsightsContentQuery {
      allInsights(first: 2500) {
        ...AllInsightsRecordFragment
      }
    }
  `,
  [AllInsightsRecordFragment],
);
