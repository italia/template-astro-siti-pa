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
    query AllWebinar($dateLimit: Date) {
      allWebinarItems(first: 2500, filter: { date: { gt: $dateLimit } }) {
        ...WebinarItemFragment
      }
    }
  `,
  [WebinarItemFragment],
);

export const AllWebinarsContentQuery = graphql(
  `
    query AllWebinarsContentQuery {
      allWebinarItems(first: 2500) {
        ...AllWebinarRecordFragment
      }
    }
  `,
  [AllWebinarRecordFragment],
);
