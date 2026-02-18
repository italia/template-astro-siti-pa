import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
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
