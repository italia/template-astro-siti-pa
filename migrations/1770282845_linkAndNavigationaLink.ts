import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Modular Content (Single block) field "CTA" (`cta`) in block model "Cards section with tab" (`news_feed`)',
  );
  await client.fields.create("RH3d7bWeSlSt4w-W7s3_wg", {
    id: "TgqcE9cuREe7mExs3tD-zA",
    label: "CTA",
    field_type: "single_block",
    api_key: "cta",
    validators: {
      single_block_blocks: { item_types: ["Nwki1YZWRhqgFtIM3Hdgqw"] },
    },
    appearance: {
      addons: [],
      editor: "framed_single_block",
      parameters: { start_collapsed: false },
    },
    default_value: null,
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Modular Content (Single block) field "CTA" (`cta`) in block model "News tab" (`news_tab`)',
  );
  await client.fields.destroy("KOZgHViTQ1OWKtQgzxBUtQ");

  console.log(
    'Delete Modular Content (Single block) field "CTA" (`cta`) in block model "Story tab" (`story_tab`)',
  );
  await client.fields.destroy("K-HOEDA4T--SzZcW8XvyrA");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single link field "Link to" (`link_to`) in block model "Internal link" (`internal_link`)',
  );
  await client.fields.update("RvmM29nOTQ23l9vPZjxojg", {
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["MK1luhfjT5-vyrmLiB0Qeg", "c5DDst-qS8q_9mYv71XK9w"],
      },
      required: {},
    },
  });

  console.log(
    'Update Modular Content (Single block) field "CTA" (`cta`) in block model "Text block" (`text_block`)',
  );
  await client.fields.update("G6lCMaUNT36eQO7yTAyHuA", {
    validators: {
      single_block_blocks: {
        item_types: ["Nwki1YZWRhqgFtIM3Hdgqw", "fhF1HPNNQlKNy5KNGfLtuw"],
      },
    },
  });
}
