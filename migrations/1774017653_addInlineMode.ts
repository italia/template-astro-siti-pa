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
    'Update Boolean field "Show inline card" (`show_inline_card`) in block model "Section card link list " (`card_link_list`)',
  );
  await client.fields.update("UPcGhKACTcy60zO_e98FrQ", { position: 1 });
}
