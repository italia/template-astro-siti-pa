import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Modular Content (Multiple blocks) field "Links" (`links`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.create("IzWzz4YeQcqJ7J34Xie2xg", {
    id: "O-DOoJTiQf2YrV6qVnroXg",
    label: "Links",
    field_type: "rich_text",
    api_key: "links",
    validators: {
      rich_text_blocks: { item_types: ["fhF1HPNNQlKNy5KNGfLtuw"] },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    default_value: null,
  });

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
      required: {},
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
    'Delete Single-line string field "Brand logo" (`brand_logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.destroy("A5bt6cYeRIiVPy7zREIcCg");

  console.log(
    'Delete Multiple links field "Links" (`link_to_resource`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.destroy("WSPI8fC2SbufmqUMUxiCJQ");

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
    'Update Single-line string field "Url" (`url`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("QyRyYJVqS_O8rbzuWQngOg", { position: 1 });

  console.log(
    'Update Single-line string field "Icon select" (`icon_select`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("WE54rogWRVSH6cZ2F1VxNg", {
    label: "Icon select",
    api_key: "icon_select",
  });

  console.log(
    'Update Single link field "Category" (`category`) in model "Resource" (`resource`)',
  );
  await client.fields.update("OvJ-Yv5vQICKA4eX0Sl8wA", {
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["MIkfamqyTpKIwUWnNh8Cdw"],
      },
      required: {},
    },
  });

  console.log(
    'Update Single link field "Macro topic" (`macro_topic`) in model "Resource" (`resource`)',
  );
  await client.fields.update("W_KtWWg-R0ChJVbwIlcLTQ", {
    label: "Macro topic",
    api_key: "macro_topic",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["PNzBtRKsSnKc90MAvnbrrA"],
      },
      required: {},
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Links" (`links`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.update("O-DOoJTiQf2YrV6qVnroXg", { position: 2 });

  console.log(
    'Update Single-line string field "Title" (`title`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.update("BGVDhgfSTd26JzLYqdkk8A", { position: 1 });

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
    'Update Single-line string field "Label" (`label`) in model "Macro topic" (`macro_topic`)',
  );
  await client.fields.update("DAymFwEOTOucHmKYtQkofQ", { validators: {} });

  console.log(
    'Update Modular Content (Multiple blocks) field "Utility" (`utility`) in model "Layout" (`layout`)',
  );
  await client.fields.update("DQjejF_9R_-BYzkGSGCUHQ", {
    validators: {
      rich_text_blocks: { item_types: ["CTrt_dG9RcuokSxQmsa5TQ"] },
    },
  });

  console.log("Destroy models/block models");

  console.log('Delete block model "Supporting brand" (`supporting_brand`)');
  await client.itemTypes.destroy("FfQ1tV9TQHG1rkthHrShnw", {
    skip_menu_items_deletion: true,
  });
}
