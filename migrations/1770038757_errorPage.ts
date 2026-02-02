import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create fieldset "Error page" in model "Global setting" (`global_setting`)',
  );
  await client.fieldsets.create("des80U_2TkCQPszy5emeLA", {
    id: "bbL_4MmLQuqmTMu0abNBzQ",
    title: "Error page",
    collapsible: true,
  });

  console.log(
    'Create Single-line string field "Title " (`title`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "WVZWMiFGT2WXIiLtV-6s5A",
    label: "Title ",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "bbL_4MmLQuqmTMu0abNBzQ", type: "fieldset" },
  });

  console.log(
    'Create Multiple-paragraph text field "Paragraph" (`paragraph`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "XvaN929eSveWJNpBobg56g",
    label: "Paragraph",
    field_type: "text",
    api_key: "paragraph",
    localized: true,
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
    fieldset: { id: "bbL_4MmLQuqmTMu0abNBzQ", type: "fieldset" },
  });

  console.log(
    'Create Single asset field "Image" (`image`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "QHJFvvL5TguPCS3drwjApw",
    label: "Image",
    field_type: "file",
    api_key: "image",
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: { id: "bbL_4MmLQuqmTMu0abNBzQ", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Label cta" (`label_cta`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "B2QwnlEJTK6BfxjHdNIX2g",
    label: "Label cta",
    field_type: "string",
    api_key: "label_cta",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "bbL_4MmLQuqmTMu0abNBzQ", type: "fieldset" },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Title " (`title`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("WVZWMiFGT2WXIiLtV-6s5A", { position: 0 });

  console.log(
    'Update Multiple-paragraph text field "Paragraph" (`paragraph`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("XvaN929eSveWJNpBobg56g", { position: 1 });

  console.log(
    'Update Single asset field "Image" (`image`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("QHJFvvL5TguPCS3drwjApw", { position: 2 });

  console.log(
    'Update Single-line string field "Label cta" (`label_cta`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("B2QwnlEJTK6BfxjHdNIX2g", { position: 3 });

  console.log("Finalize models/block models");

  console.log('Update model "Global setting" (`global_setting`)');
  await client.itemTypes.update("des80U_2TkCQPszy5emeLA", {
    presentation_image_field: { id: "QHJFvvL5TguPCS3drwjApw", type: "field" },
    image_preview_field: { id: "QHJFvvL5TguPCS3drwjApw", type: "field" },
  });
}
