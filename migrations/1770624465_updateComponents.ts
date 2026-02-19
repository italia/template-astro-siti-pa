import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Upgrade version of plugin "Web Previews"');
  await client.plugins.update("WSD86jZDQtqqM0v0QSUefA", {
    parameters: {
      frontends: [
        {
          name: "Production",
          disabled: false,
          customHeaders: [],
          previewWebhook: `${process.env.SITE_URL}/api/preview-links?token=${process.env.SECRET_API_TOKEN}`,
        },
        {
          name: "Local",
          disabled: false,
          customHeaders: [],
          previewWebhook: `http://localhost:4321/api/preview-links?token=${process.env.SECRET_API_TOKEN}`,
        },
      ],
      startOpen: true,
      defaultViewports: [
        { icon: "mobile-alt", name: "Mobile", width: 375, height: 667 },
        { icon: "tablet-alt", name: "Tablet", width: 768, height: 1024 },
        { icon: "desktop-alt", name: "Desktop", width: 1280, height: 800 },
      ],
      defaultSidebarWidth: 900,
    },
    package_version: "1.0.26",
  });

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Text + cards" (`text_use_case`)',
  );
  await client.fields.create("U50kKrnkSua6L3eIAEFHhA", {
    id: "BNW_Mue6TlCvpyo6hPs-hg",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    validators: { required: {} },
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
    'Update Single-line string field "Ratio" (`ratio`) in block model "Image thumb single" (`image_block`)',
  );
  await client.fields.update("QpdOlew6RWuwA35leIWcVA", {
    validators: {},
    appearance: {
      addons: [],
      editor: "string_select",
      parameters: { options: [{ hint: "", label: "16:9", value: "16x9" }] },
    },
  });

  console.log(
    'Update Single link field "Parent page" (`parent_page`) in model "Article" (`article`)',
  );
  await client.fields.update("CnfW4M76S6GN-mGRit_9yA", {
    hint: "Inserire il parent page solo all'articolo introduttivo (non ai sotto-articoli )",
  });

  console.log(
    'Update Single-line string field "Type" (`news_page_tab_type`) in block model "Catalogue tab" (`catalogue_tab`)',
  );
  await client.fields.update("N7VjZFjyTR6TzrY7MD3ugQ", {
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "string_select",
      parameters: {
        options: [
          { hint: "", label: "Storie in evidenza", value: "story_item" },
          { hint: "", label: "Webinar", value: "webinar_item" },
          { hint: "", label: "Notizie", value: "news_item" },
          { hint: "", label: "Risorse", value: "resource" },
        ],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update block model "External link" (`external_link`)');
  await client.itemTypes.update("fhF1HPNNQlKNy5KNGfLtuw", {
    name: "External link",
  });

  console.log("Manage menu items");

  console.log('Update menu item "Guide"');
  await client.menuItems.update("CuadthmbT_esi5VV5l_N4A", { position: 2 });

  console.log('Update menu item "Webinar"');
  await client.menuItems.update("GHKJ1kfCSTqWtw900Tgq2w", { position: 6 });
}
