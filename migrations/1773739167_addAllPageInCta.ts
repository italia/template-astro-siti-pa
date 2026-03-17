import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
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
        item_types: [
          "MK1luhfjT5-vyrmLiB0Qeg",
          "PeXbTb7tRvCzyyICsUoedw",
          "T-HlXkO8SEWb8JYh5FuYCQ",
          "ZO62cMfeSpmP2tBt7g_u6g",
          "c5DDst-qS8q_9mYv71XK9w",
        ],
      },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
  });
}
