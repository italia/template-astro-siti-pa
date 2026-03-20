import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Boolean field "Show inline card" (`show_inline_card`) in block model "Section card link list " (`card_link_list`)',
  );
  await client.fields.create("eYC6ITddSYSZVRiO1Ldt3g", {
    id: "UPcGhKACTcy60zO_e98FrQ",
    label: "Show inline card",
    field_type: "boolean",
    api_key: "show_inline_card",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Multiple links field "Kpi element" (`kpi_element`) in block model "Highlight" (`highlight`)',
  );
  await client.fields.update("KrHrYC0RTSuiX8NvlBnD8A", {
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["MmI20ZtzQ5-AZGWwe6vUlw"],
      },
      size: { max: 4 },
    },
    appearance: {
      addons: [],
      editor: "links_select",
      parameters: { filters: [] },
    },
  });

  console.log(
    'Update Boolean field "Show inline card" (`show_inline_card`) in block model "Section card link list " (`card_link_list`)',
  );
  await client.fields.update("UPcGhKACTcy60zO_e98FrQ", { position: 1 });
}
