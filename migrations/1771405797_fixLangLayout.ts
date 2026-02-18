import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Update settings of plugin "Web Previews"');
  await client.plugins.update("WSD86jZDQtqqM0v0QSUefA", {
    parameters: {
      frontends: [
        {
          name: "Production",
          disabled: false,
          customHeaders: [],
          previewWebhook:
            "https://template-site-astro.vercel.app/api/preview-links?token=4a8eaee12344fd81f6989fe9acb7f8bc4fc815210f0aec774b3fd7329efe35be",
        },
        {
          name: "Local",
          disabled: false,
          customHeaders: [],
          previewWebhook:
            "http://localhost:4321/api/preview-links?token=4a8eaee12344fd81f6989fe9acb7f8bc4fc815210f0aec774b3fd7329efe35be",
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
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Organizations" (`organizations`) in model "Layout" (`layout`)',
  );
  await client.fields.update("R9shkL0aQPKXv7jX74VGxw", {
    localized: true,
    default_value: { it: null, en: null },
  });

  console.log(
    'Update Single-line string field "Site name" (`site_name`) in model "Layout" (`layout`)',
  );
  await client.fields.update("GOOdUWq9SECbva_qyO2yew", {
    localized: false,
    default_value: null,
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Topic link" (`topic_link`) in model "Layout" (`layout`)',
  );
  await client.fields.update("NuGWEHdsRLmnDN1pommzUQ", {
    localized: true,
    default_value: { it: null, en: null },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Utility" (`utility`) in model "Layout" (`layout`)',
  );
  await client.fields.update("DQjejF_9R_-BYzkGSGCUHQ", {
    localized: true,
    default_value: { it: null, en: null },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Small print" (`small_print`) in model "Layout" (`layout`)',
  );
  await client.fields.update("BK9N0BEWQBS0HWhmdU0E3Q", {
    localized: true,
    default_value: { it: null, en: null },
  });
}
