import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Article structured text" (`structured_text`)',
  );
  await client.fields.create("EAJfEdPjRVy9SJIOnQDM_w", {
    id: "YpklsanmTs627AamHO29rg",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection: '{\n  "extends": [\n    "backgroundLightColors"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Article structured text" (`structured_text`)',
  );
  await client.fields.update("YpklsanmTs627AamHO29rg", { position: 1 });

  console.log("Finalize models/block models");

  console.log(
    'Update block model "Article structured text" (`structured_text`)',
  );
  await client.itemTypes.update("EAJfEdPjRVy9SJIOnQDM_w", {
    presentation_title_field: { id: "YpklsanmTs627AamHO29rg", type: "field" },
  });
}
