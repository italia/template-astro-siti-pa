import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Link" (`link_to`) in block model "Card presentation banner" (`channel`)',
  );
  await client.fields.create("boYJ_9tCSI6ARMr6HycKkA", {
    id: "UFUc0wObRhGei1sEW-f7Lw",
    label: "Link",
    field_type: "string",
    api_key: "link_to",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Icon" (`icon`) in block model "Internal link" (`internal_link`)',
  );
  await client.fields.destroy("MwpWNuUERP-8Yg4v_nq3lg");

  console.log(
    'Delete Single-line string field "Title icon" (`titleicon`) in block model "Internal link" (`internal_link`)',
  );
  await client.fields.destroy("fjS0j0rPQQWpCP5HTXLBuA");

  console.log(
    'Delete Single-line string field "Title icon" (`title_icon`) in block model "External link" (`external_link`)',
  );
  await client.fields.destroy("OQBUw24BREOqOK9DA6Ns5w");

  console.log(
    'Delete Single-line string field "Icon" (`icon`) in block model "External link" (`external_link`)',
  );
  await client.fields.destroy("YmvRvNZjRG223Ko79tJGbQ");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Variant" (`variant`) in block model "Hero" (`hero`)',
  );
  await client.fields.update("VaZsF85dQCyo8931f9ej7Q", {
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "options": [\n    {\n      "name": "Default",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768923161-herodefault.png",\n      "value": "default"\n    },\n    {\n      "name": "Small",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768921692-herosmall.png",\n      "value": "small"\n    },\n    {\n      "name": "Full height",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768921692-herofullheightimage.png",\n      "value": "xsmall-full"\n    },\n    {\n      "name": "Compact",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768921692-herocompactimage.png",\n      "value": "xsmall-compact"\n    }\n  ],\n  "presentation": {\n    "type": "carousel",\n    "width": "300px"\n  }\n}',
      },
      field_extension: "visualSelect",
    },
  });

  console.log(
    'Update Single-line string field "Variant" (`variant`) in block model "Text + image" (`text_image`)',
  );
  await client.fields.update("ZJdAm5F1SwGojot3Sb7kaQ", {
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "options": [\n    {\n      "name": "Text + Image default",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768921320-textimagedeafult.png",\n      "value": "variant-1"\n    },\n    {\n      "name": "Text + Big image",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768921366-textimagebig.png",\n      "value": "variant-2"\n    },\n    {\n      "name": "Text + Image with box",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768921345-textimagewithbox.png",\n      "value": "variant-3"\n    }\n  ],\n  "presentation": {\n    "type": "carousel",\n    "width": "300px"\n  }\n}',
      },
      field_extension: "visualSelect",
    },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Accordion item" (`accordion_item`)',
  );
  await client.schemaMenuItems.update("FXBYVwzISm2wNqUL4Xr9SQ", {
    position: 11,
  });

  console.log(
    'Update block schema menu item for block model "Topic" (`topic`)',
  );
  await client.schemaMenuItems.update("R0uPMmHIQLCaVeNZFLpKgA", {
    position: 4,
  });

  console.log(
    'Update block schema menu item for block model "Card presentation banner" (`channel`)',
  );
  await client.schemaMenuItems.update("Bk4k2QkARim5nZDLWcvOKw", {
    position: 10,
  });

  console.log(
    'Update block schema menu item for block model "List item" (`list_item`)',
  );
  await client.schemaMenuItems.update("JU_fCw93T0mGFWSSl0oIEg", {
    position: 13,
  });

  console.log(
    'Update block schema menu item for block model "Statistics box" (`statistics_box`)',
  );
  await client.schemaMenuItems.update("df8lJy2tR5eXEEjtl0XReQ", {
    position: 12,
  });

  console.log(
    'Update block schema menu item for block model "Note" (`callout`)',
  );
  await client.schemaMenuItems.update("Gws7JQGnQ8WYSc3VoqJr2g", {
    position: 6,
  });

  console.log(
    'Update block schema menu item for block model "Quick link card" (`quick_link_card`)',
  );
  await client.schemaMenuItems.update("Jxuqc3SjRoyqBlDawPP-nQ", {
    position: 5,
  });

  console.log(
    'Update block schema menu item for block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.schemaMenuItems.update("WlU1m7YJS0qHZXK7IyteNA", {
    position: 8,
  });

  console.log(
    'Update block schema menu item for block model "Blockquote" (`blockquote`)',
  );
  await client.schemaMenuItems.update("R2QC2k6hQ_uu4Qn6Te2zZw", {
    position: 3,
  });

  console.log(
    'Update block schema menu item for block model "Icon list item" (`icon_list_item`)',
  );
  await client.schemaMenuItems.update("am3XAXQqSdyCdsfnxHupjA", {
    position: 2,
  });

  console.log(
    'Update block schema menu item for block model "Brand" (`brand`)',
  );
  await client.schemaMenuItems.update("e_jNqAb6SAOLPTRHuUr5ZQ", {
    position: 1,
  });
}
