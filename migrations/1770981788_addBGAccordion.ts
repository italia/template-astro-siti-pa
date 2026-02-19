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
    'Create Single-line string field "Background color" (`background_color`) in block model "FAQ section" (`faq_section`)',
  );
  await client.fields.create("BqiyK44MT9eCdscz8pcESg", {
    id: "Ycmrj0lNTwO2Z8wYcic9jw",
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
    default_value: "default",
  });

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Text + accordion" (`text_accordion`)',
  );
  await client.fields.create("SC9fd201RBSV7s31u6zCKg", {
    id: "XYkYnr6zTZSJTaqu-jxhfw",
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
    default_value: "default",
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Variant" (`variant`) in block model "Accordion" (`accordion`)',
  );
  await client.fields.destroy("aj-HjW7CRkC6zUB21yyqOQ");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "FAQ section" (`faq_section`)',
  );
  await client.fields.update("Ycmrj0lNTwO2Z8wYcic9jw", { position: 1 });

  console.log(
    'Update Structured text field "Article structured text" (`content`) in model "Article" (`article`)',
  );
  await client.fields.update("VACT72qFRYq6ztu2QwKCLg", {
    label: "Article structured text",
  });

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Text + accordion" (`text_accordion`)',
  );
  await client.fields.update("XYkYnr6zTZSJTaqu-jxhfw", { position: 1 });

  console.log("Finalize models/block models");

  console.log('Update block model "Accordion" (`accordion`)');
  await client.itemTypes.update("KmHwDLyUQxy3RqoFfebkew", {
    presentation_title_field: null,
  });
}
