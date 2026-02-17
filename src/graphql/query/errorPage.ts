import { ErrorRecordFragment } from "@graphql/fragment/globalSettings";
import { graphql } from "@graphql/graphql";

export const ErrorPageQuery = graphql(
  `
    query ErrorPage {
      globalSetting {
        ...ErrorRecordFragment
      }
      homepage {
        id
      }
    }
  `,
  [ErrorRecordFragment],
);
