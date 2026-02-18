import { InsightContentFragment } from "@graphql/fragment/insight";
import { graphql } from "@graphql/graphql";

export const AllInsightsContentQuery = graphql(
  `
    query AllInsightsContentQuery {
      allInsights {
        id
        locales: _locales
        publishedAt: _publishedAt
        updatedAt: _updatedAt
        allContentLocales: _allContentLocales {
          locale
          value {
            ...InsightContentFragment
          }
        }
      }
    }
  `,
  [InsightContentFragment],
);
