import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create block model "Text only" (`text_only`)');
  await client.itemTypes.create(
    {
      id: "BttQ-GOdSDCjRZinK2Hevw",
      name: "Text only",
      api_key: "text_only",
      modular_block: true,
      draft_saving_active: false,
      hint: "https://www.datocms-assets.com/166118/1769001463-text-image-deafult.png\n\nComponente utilizzato  per introdurre pagine, riassumere concetti complessi ed illustrare visivamente informazioni importanti.",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "HB7bLZUVRsiHkvnHuWjoIA",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Text only" (`text_only`)',
  );
  await client.fields.create("BttQ-GOdSDCjRZinK2Hevw", {
    id: "QLsI9hvdTxGVSMPV6OnuPQ",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection: '{\n  "extends": [\n    "backgroundColors"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: "default",
  });

  console.log(
    'Create Modular Content (Single block) field "text" (`text`) in block model "Text only" (`text_only`)',
  );
  await client.fields.create("BttQ-GOdSDCjRZinK2Hevw", {
    id: "GLB86dncR1yzC6fhuZkdKg",
    label: "text",
    field_type: "single_block",
    api_key: "text",
    validators: {
      single_block_blocks: { item_types: ["frtlmkj5RzqxowW3cR78uw"] },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "frameless_single_block",
      parameters: {},
    },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Page" (`page`)',
  );
  await client.fields.update("GF7gIgNTSi6ithc2WsLnyg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BqiyK44MT9eCdscz8pcESg",
          "BttQ-GOdSDCjRZinK2Hevw",
          "EAJfEdPjRVy9SJIOnQDM_w",
          "ISQ-koGkTSSMpTeQ7yX72w",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "SC9fd201RBSV7s31u6zCKg",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "c2sA3G6uT_q4EBkYwbUqaw",
          "eoeVTiI4S362w9-yoe7i6g",
        ],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Homepage" (`homepage`)',
  );
  await client.fields.update("WZVHotolRE6evlVhD7wjTg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BttQ-GOdSDCjRZinK2Hevw",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "U50kKrnkSua6L3eIAEFHhA",
          "Y90FAsoITzyeuRK7Q4PtiQ",
        ],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update block model "Text only" (`text_only`)');
  await client.itemTypes.update("BttQ-GOdSDCjRZinK2Hevw", {
    presentation_title_field: { id: "GLB86dncR1yzC6fhuZkdKg", type: "field" },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Text only" (`text_only`)',
  );
  await client.schemaMenuItems.update("HB7bLZUVRsiHkvnHuWjoIA", {
    position: 0,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 33,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 31,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 32,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 23,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 26,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 27,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 25,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 17,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 18,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 24,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 28,
  });
}
