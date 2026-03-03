import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Upgrade version of plugin "Web Previews"');
  await client.plugins.update("WSD86jZDQtqqM0v0QSUefA", {
    package_version: "1.0.30",
  });

  console.log("Create new models/block models");

  console.log('Create block model "Brand header" (`brand_header`)');
  await client.itemTypes.create(
    {
      id: "MqJmY7ZvSjuF6ySHkTe5ww",
      name: "Brand header",
      api_key: "brand_header",
      modular_block: true,
      draft_saving_active: false,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "PUBlFnJbQBWCSH6k3Kix8w",
    },
  );

  console.log('Create block model "Mega menu item" (`mega_menu_item`)');
  await client.itemTypes.create(
    {
      id: "afnHe19zSnGsN_U2xKrkpA",
      name: "Mega menu item",
      api_key: "mega_menu_item",
      modular_block: true,
      draft_saving_active: false,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "cZgnI5FCS8Km9ecXBiM50w",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Label" (`label`) in block model "Brand header" (`brand_header`)',
  );
  await client.fields.create("MqJmY7ZvSjuF6ySHkTe5ww", {
    id: "ciuawy8WRzOn87koM94DnA",
    label: "Label",
    field_type: "string",
    api_key: "label",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Url" (`url`) in block model "Brand header" (`brand_header`)',
  );
  await client.fields.create("MqJmY7ZvSjuF6ySHkTe5ww", {
    id: "J3-OXiEHTB-B3nyS2t3LDw",
    label: "Url",
    field_type: "string",
    api_key: "url",
    validators: { required: {}, format: { predefined_pattern: "url" } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Short label" (`short_label`) in block model "Brand header" (`brand_header`)',
  );
  await client.fields.create("MqJmY7ZvSjuF6ySHkTe5ww", {
    id: "HTBa3iH1TueKX9uh8NRs-Q",
    label: "Short label",
    field_type: "string",
    api_key: "short_label",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.fields.create("afnHe19zSnGsN_U2xKrkpA", {
    id: "TDCgCi2CRrO0CpulVmeH-g",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Subtitle" (`subtitle`) in block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.fields.create("afnHe19zSnGsN_U2xKrkpA", {
    id: "bROqIfqVRF-fW9h7cvcSAQ",
    label: "Subtitle",
    field_type: "string",
    api_key: "subtitle",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single link field "Points to" (`points_to`) in block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.fields.create("afnHe19zSnGsN_U2xKrkpA", {
    id: "UTYnp55jTwiO8PHsGcf95A",
    label: "Points to",
    field_type: "link",
    api_key: "points_to",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "fail",
        item_types: ["MK1luhfjT5-vyrmLiB0Qeg", "c5DDst-qS8q_9mYv71XK9w"],
      },
      required: {},
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single asset field "Image" (`image`) in block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.fields.create("afnHe19zSnGsN_U2xKrkpA", {
    id: "Z5YNGn3HSMOJLV33uMhDrg",
    label: "Image",
    field_type: "file",
    api_key: "image",
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Multiple-paragraph text field "Caption" (`caption`) in block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.fields.create("afnHe19zSnGsN_U2xKrkpA", {
    id: "TFXDxqQLSNuyh5aMtVY9LQ",
    label: "Caption",
    field_type: "text",
    api_key: "caption",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "markdown",
      parameters: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "strikethrough",
          "code",
          "unordered_list",
          "ordered_list",
          "quote",
          "link",
          "image",
          "fullscreen",
        ],
      },
    },
    default_value: null,
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "Sub menu" (`sub_menu`) in block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.fields.create("afnHe19zSnGsN_U2xKrkpA", {
    id: "XlMl9UZQTJGNSxm1XOkhFA",
    label: "Sub menu",
    field_type: "rich_text",
    api_key: "sub_menu",
    validators: {
      rich_text_blocks: { item_types: ["TqVQ1bvYQnuXTJtdJHQ7Lg"] },
      size: { min: 1, max: 6 },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    default_value: null,
  });

  console.log(
    'Create Modular Content (Single block) field "CTA" (`cta`) in block model "Hero" (`hero`)',
  );
  await client.fields.create("Awg0gTrzT1WtWycAQ5I-cw", {
    id: "T-Z4yWudTaiIwl33npaaLQ",
    label: "CTA",
    field_type: "single_block",
    api_key: "cta",
    validators: {
      single_block_blocks: {
        item_types: ["Nwki1YZWRhqgFtIM3Hdgqw", "fhF1HPNNQlKNy5KNGfLtuw"],
      },
    },
    appearance: {
      addons: [],
      editor: "framed_single_block",
      parameters: { start_collapsed: false },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Variant" (`variant`) in model "Layout" (`layout`)',
  );
  await client.fields.create("P3HYBb3RTOG7iNYtcVNAEg", {
    id: "Jx73uq5JRBqSYdXb7oAZNg",
    label: "Variant",
    field_type: "string",
    api_key: "variant",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "options": [\n    {\n      "name": "Light",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "light"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#0066cc",\n      "value": "dark"\n    }\n  ],\n  "presentation": {\n    "type": "carousel",\n    "width": "100px"\n  }\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: "light",
    fieldset: { id: "URrOLzACQECEzErQ2FQqaw", type: "fieldset" },
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "List navbar brand" (`list_navbar_brand`) in model "Layout" (`layout`)',
  );
  await client.fields.create("P3HYBb3RTOG7iNYtcVNAEg", {
    id: "aMWtd-g9SFCrtnduFVdODw",
    label: "List navbar brand",
    field_type: "rich_text",
    api_key: "list_navbar_brand",
    localized: true,
    validators: {
      rich_text_blocks: { item_types: ["MqJmY7ZvSjuF6ySHkTe5ww"] },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: { id: "URrOLzACQECEzErQ2FQqaw", type: "fieldset" },
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "Navigazione accessoria" (`meta_navigation`) in model "Layout" (`layout`)',
  );
  await client.fields.create("P3HYBb3RTOG7iNYtcVNAEg", {
    id: "c9Q_KFDkQbiYUBSRPcXKkw",
    label: "Navigazione accessoria",
    field_type: "rich_text",
    api_key: "meta_navigation",
    localized: true,
    validators: {
      rich_text_blocks: { item_types: ["fhF1HPNNQlKNy5KNGfLtuw"] },
      size: { max: 5 },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: { id: "URrOLzACQECEzErQ2FQqaw", type: "fieldset" },
  });

  console.log(
    'Create fieldset "Pre-footer" in model "Global setting" (`global_setting`)',
  );
  await client.fieldsets.create("des80U_2TkCQPszy5emeLA", {
    id: "ZCHZ3vWvQ-2H2UeQoR6_Ug",
    title: "Pre-footer",
    collapsible: true,
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "Links" (`links`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "FgAjPsCPQSidHyuEiDelvw",
    label: "Links",
    field_type: "rich_text",
    api_key: "links",
    localized: true,
    validators: {
      rich_text_blocks: { item_types: ["fhF1HPNNQlKNy5KNGfLtuw"] },
      size: { max: 2 },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: { id: "ZCHZ3vWvQ-2H2UeQoR6_Ug", type: "fieldset" },
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Organization" (`organization`) in model "Layout" (`layout`)',
  );
  await client.fields.destroy("Z8cURa8gTlShYcBes4VeFQ");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Variant" (`variant`) in model "Layout" (`layout`)',
  );
  await client.fields.update("Jx73uq5JRBqSYdXb7oAZNg", { position: 0 });

  console.log(
    'Update Modular Content (Multiple blocks) field "List navbar brand" (`list_navbar_brand`) in model "Layout" (`layout`)',
  );
  await client.fields.update("aMWtd-g9SFCrtnduFVdODw", { position: 2 });

  console.log(
    'Update Modular Content (Multiple blocks) field "Navigazione accessoria" (`meta_navigation`) in model "Layout" (`layout`)',
  );
  await client.fields.update("c9Q_KFDkQbiYUBSRPcXKkw", { position: 3 });

  console.log(
    'Update Modular Content (Multiple blocks) field "Navigation bar" (`navigation_bar`) in model "Layout" (`layout`)',
  );
  await client.fields.update("MYHJRi75QZijP7vZ3UG_pg", {
    validators: {
      rich_text_blocks: {
        item_types: ["TqVQ1bvYQnuXTJtdJHQ7Lg", "afnHe19zSnGsN_U2xKrkpA"],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Navigation bar secondary" (`navigation_bar_secondary`) in model "Layout" (`layout`)',
  );
  await client.fields.update("cEUoM-LFTZul0OmlOtnIxw", {
    validators: {
      rich_text_blocks: {
        item_types: ["TqVQ1bvYQnuXTJtdJHQ7Lg", "afnHe19zSnGsN_U2xKrkpA"],
      },
    },
  });

  console.log(
    'Update Modular Content (Single block) field "Resources" (`resources`) in block model "Webinar description" (`webinar_description`)',
  );
  await client.fields.update("Um7l_HfXTaiqILhpU5OXeA", {
    label: "Resources",
    api_key: "resources",
    validators: {
      single_block_blocks: { item_types: ["IzWzz4YeQcqJ7J34Xie2xg"] },
    },
  });

  console.log(
    'Update Single-line string field "Last update label" (`last_update_label`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("fxkCtUfFRMuUgdtwcv52VA", {
    position: 0,
    fieldset: { id: "ZCHZ3vWvQ-2H2UeQoR6_Ug", type: "fieldset" },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Links" (`links`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("FgAjPsCPQSidHyuEiDelvw", { position: 1 });

  console.log("Finalize models/block models");

  console.log('Update block model "Brand header" (`brand_header`)');
  await client.itemTypes.update("MqJmY7ZvSjuF6ySHkTe5ww", {
    presentation_title_field: { id: "J3-OXiEHTB-B3nyS2t3LDw", type: "field" },
  });

  console.log('Update block model "Mega menu item" (`mega_menu_item`)');
  await client.itemTypes.update("afnHe19zSnGsN_U2xKrkpA", {
    presentation_title_field: { id: "TDCgCi2CRrO0CpulVmeH-g", type: "field" },
    presentation_image_field: { id: "Z5YNGn3HSMOJLV33uMhDrg", type: "field" },
  });

  console.log('Update model "Layout" (`layout`)');
  await client.itemTypes.update("P3HYBb3RTOG7iNYtcVNAEg", {
    presentation_title_field: null,
    title_field: null,
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Note link" (`callout_link`)',
  );
  await client.schemaMenuItems.update("Xr5VyubHTbasa0Ezfevrjg", {
    position: 0,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Brand header" (`brand_header`)',
  );
  await client.schemaMenuItems.update("PUBlFnJbQBWCSH6k3Kix8w", {
    position: 0,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Mega menu item" (`mega_menu_item`)',
  );
  await client.schemaMenuItems.update("cZgnI5FCS8Km9ecXBiM50w", {
    position: 0,
    parent: { id: "N4pGvMpZQoa7NDkSri-tlA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 33,
  });

  console.log('Update model schema menu item "Articles"');
  await client.schemaMenuItems.update("HfMDZsX6RS6OJCfEGE2cUw", {
    position: 14,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 31,
  });

  console.log('Update model schema menu item "Pages"');
  await client.schemaMenuItems.update("JGmx124qRvqJiP3rJ4Cufw", {
    position: 15,
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

  console.log('Update block schema menu item "Section block"');
  await client.schemaMenuItems.update("GfAca4qoTAegUR6oaGmmxQ", {
    position: 8,
  });

  console.log('Update block schema menu item "Components"');
  await client.schemaMenuItems.update("LIGiN-0eTfea06jXmCO0vA", {
    position: 11,
  });

  console.log('Update block schema menu item "Atoms"');
  await client.schemaMenuItems.update("WMk6e5CwQCOCiC_iV0e-DA", {
    position: 13,
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

  console.log(
    'Update block schema menu item "Components Articles and Resources"',
  );
  await client.schemaMenuItems.update("VAm7EnFdQduM8T51t9jihw", {
    position: 5,
  });

  console.log('Update block schema menu item "Components Catalogue Pages"');
  await client.schemaMenuItems.update("PHPtVvVcT6Sm8UP585yU1A", {
    position: 6,
  });

  console.log('Update block schema menu item "Components Global Settings"');
  await client.schemaMenuItems.update("B9pAqZC-R_aNW2aep_TvTg", {
    position: 7,
  });

  console.log(
    'Update block schema menu item "Components Home and Standard Pages"',
  );
  await client.schemaMenuItems.update("N98z0TCPROK9ijNG3DlE2A", {
    position: 4,
  });

  console.log(
    'Update block schema menu item for block model "Section" (`section`)',
  );
  await client.schemaMenuItems.update("D_DGXbUhQ2GYKz5cBf7y0Q", {
    position: 10,
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
