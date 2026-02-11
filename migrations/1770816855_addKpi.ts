import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Open Data Path" (`open_data_path`) in model "Kpi element" (`kpi_element`)',
  );
  await client.fields.create("MmI20ZtzQ5-AZGWwe6vUlw", {
    id: "WxPlVLfhSISdKOVFXAaDcg",
    label: "Open Data Path",
    field_type: "string",
    api_key: "open_data_path",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Multiple links field "Kpi element" (`kpi_element`) in block model "Highlight" (`highlight`)',
  );
  await client.fields.create("VYZP2JWtR-mtk0r1lewgmA", {
    id: "KrHrYC0RTSuiX8NvlBnD8A",
    label: "Kpi element",
    field_type: "links",
    api_key: "kpi_element",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["MmI20ZtzQ5-AZGWwe6vUlw"],
      },
      size: { max: 3 },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Modular Content (Multiple blocks) field "Cards" (`cards`) in block model "Highlight" (`highlight`)',
  );
  await client.fields.destroy("NPCgqJaiQT6WHa1nmrA3Ag");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Multiple links field "Kpi element" (`kpi_element`) in block model "Highlight" (`highlight`)',
  );
  await client.fields.update("KrHrYC0RTSuiX8NvlBnD8A", { position: 4 });

  console.log(
    'Update Single asset field "Image" (`image`) in block model "Highlight" (`highlight`)',
  );
  await client.fields.update("cZb8pCZOR_WUQbEuEurJcA", { position: 3 });
}
