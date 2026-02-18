import { WebinarItemFragment } from "@graphql/fragment/commonFragments";
import {
  AllWebinarItemsFragment,
  AllWebinarRecordFragment,
} from "@graphql/fragment/webinar";
import { graphql } from "@graphql/graphql";

export const AllWebinarItemsQuery = graphql(
  `
    query allWebinarItems {
      allWebinarItems {
        ...AllWebinarItemsFragment
      }
    }
  `,
  [AllWebinarItemsFragment],
);

export const AllWebinarQuery = graphql(
  `
    query AllWebinar {
      allWebinarItems {
        ...WebinarItemFragment
      }
    }
  `,
  [WebinarItemFragment],
);

export const AllWebinarsContentQuery = graphql(
  `
    query AllWebinarsContentQuery {
      allWebinarItems {
        ...AllWebinarRecordFragment
      }
    }
  `,
  [AllWebinarRecordFragment],
);
