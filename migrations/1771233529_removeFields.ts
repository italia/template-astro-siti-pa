import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Visually hidden" (`visually_hidden`) in block model "Note link" (`callout_link`)',
  );
  await client.fields.destroy("IzqiFY5JQ5CCqARsXObgGg");

  console.log(
    'Delete Single-line string field "Visually hidden" (`visually_hidden`) in block model "Note" (`callout`)',
  );
  await client.fields.destroy("KKVpGZWkQVCEFw6PZ4MYVw");

  console.log("Destroy models/block models");

  console.log('Delete model "Lang" (`lang`)');
  await client.itemTypes.destroy("F-BgPXl5RlecY6ylmQdGDg", {
    skip_menu_items_deletion: true,
  });

  console.log("Manage menu items");

  console.log('Delete menu item "Lang"');
  await client.menuItems.destroy("NtOuqxFbS2yX2a-K30MFrA");

  console.log('Update menu item "Schema migration"');
  await client.menuItems.update("XBPoVeXCTqiamCVBQebY5A", { position: 10 });

  console.log("Manage schema menu items");

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

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });

  console.log(
    'Update block schema menu item for block model "Note link" (`callout_link`)',
  );
  await client.schemaMenuItems.update("Xr5VyubHTbasa0Ezfevrjg", {
    position: 34,
  });

  console.log("Update permissions for environment in role Editor");
  await client.roles.updateCurrentEnvironmentPermissions("348175", {
    negative_item_type_permissions: {
      add: [
        {
          item_type: "ZoQ48l6JR_K2IxBr22BUjw",
          action: "read",
          on_creator: "anyone",
        },
      ],
    },
  });
}
