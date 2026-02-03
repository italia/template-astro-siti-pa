import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single link field "Category" (`category`) in model "Resource" (`resource`)',
  );
  await client.fields.update("OvJ-Yv5vQICKA4eX0Sl8wA", {
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
    'Update Single link field "Type of resource" (`type_resource`) in model "Resource" (`resource`)',
  );
  await client.fields.update("W_KtWWg-R0ChJVbwIlcLTQ", {
    label: "Type of resource",
    api_key: "type_resource",
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
    'Update Single-line string field "Label" (`label`) in model "Macro topic" (`macro_topic`)',
  );
  await client.fields.update("DAymFwEOTOucHmKYtQkofQ", {
    validators: { required: {} },
  });
}
