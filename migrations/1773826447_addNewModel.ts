import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log(
    'Create block model "List item with resources" (`list_item_resource`)',
  );
  await client.itemTypes.create(
    {
      id: "FJOsrYfbS-exzcFGaLnqEA",
      name: "List item with resources",
      api_key: "list_item_resource",
      modular_block: true,
      draft_saving_active: false,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "TSlMhyvFSCClFDc-XYmsvA",
    },
  );

  console.log('Create model "Story class" (`story_class`)');
  await client.itemTypes.create(
    {
      id: "F2lwKxl6RCCakDi2gECGKA",
      name: "Story class",
      api_key: "story_class",
      draft_mode_active: true,
      draft_saving_active: false,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "KPjG20d3TVCi2MH5FhHURw",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "List item with resources" (`list_item_resource`)',
  );
  await client.fields.create("FJOsrYfbS-exzcFGaLnqEA", {
    id: "PO7Gw_juRFmjBDkHbnjrTg",
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
    'Create Multiple-paragraph text field "Paragraph" (`paragraph`) in block model "List item with resources" (`list_item_resource`)',
  );
  await client.fields.create("FJOsrYfbS-exzcFGaLnqEA", {
    id: "RsBGTDHITS286Oa_2yPEvw",
    label: "Paragraph",
    field_type: "text",
    api_key: "paragraph",
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
    'Create Single-line string field "Subtitle" (`subtitle`) in block model "List item with resources" (`list_item_resource`)',
  );
  await client.fields.create("FJOsrYfbS-exzcFGaLnqEA", {
    id: "TUZ5erNRRguK24AlPcgMmQ",
    label: "Subtitle",
    field_type: "string",
    api_key: "subtitle",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "Links" (`links`) in block model "List item with resources" (`list_item_resource`)',
  );
  await client.fields.create("FJOsrYfbS-exzcFGaLnqEA", {
    id: "EIIvI2vuTtqtoKaUXuUBVQ",
    label: "Links",
    field_type: "rich_text",
    api_key: "links",
    validators: {
      rich_text_blocks: {
        item_types: ["Nwki1YZWRhqgFtIM3Hdgqw", "fhF1HPNNQlKNy5KNGfLtuw"],
      },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
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
          "Y90FAsoITzyeuRK7Q4PtiQ",
          "c2sA3G6uT_q4EBkYwbUqaw",
          "eYC6ITddSYSZVRiO1Ldt3g",
          "eoeVTiI4S362w9-yoe7i6g",
        ],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Items" (`items`) in block model "Ordered list" (`ordered_list`)',
  );
  await client.fields.update("GI2rqnJsRRiIVhFJK5204A", {
    validators: {
      rich_text_blocks: {
        item_types: ["FJOsrYfbS-exzcFGaLnqEA", "Wl31sz4mSW-_XMSEqkpNAg"],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log(
    'Update block model "List item with resources" (`list_item_resource`)',
  );
  await client.itemTypes.update("FJOsrYfbS-exzcFGaLnqEA", {
    presentation_title_field: { id: "TUZ5erNRRguK24AlPcgMmQ", type: "field" },
  });

  console.log('Update block model "Card external link" (`card_service`)');
  await client.itemTypes.update("Om27rthoTNiekMEFeTCmjQ", {
    name: "Card external link",
  });

  console.log(
    'Update block model "Section related article" (`list_collection`)',
  );
  await client.itemTypes.update("TTn5BjxOSdORIaGWSZ4MRg", {
    name: "Section related article",
  });

  console.log(
    'Update block model "Section card link list " (`card_link_list`)',
  );
  await client.itemTypes.update("eYC6ITddSYSZVRiO1Ldt3g", {
    name: "Section card link list ",
  });

  console.log("Manage menu items");

  console.log('Create menu item "Classificazione articoli"');
  await client.menuItems.create({
    id: "KvP7mgDYRGWcLOvQCBYK-w",
    label: "Classificazione articoli",
    item_type: { id: "F2lwKxl6RCCakDi2gECGKA", type: "item_type" },
    parent: { id: "SF3QYUoPS-SA8qFDRWfZMA", type: "menu_item" },
  });

  console.log('Delete menu item "Pagine di tipo Catalogo"');
  await client.menuItems.destroy("MnQ-DdT-TAyX96_elubX8w");

  console.log('Delete menu item "Pagine standard"');
  await client.menuItems.destroy("TnYBFD4EQmu83vGNhLJaNw");

  console.log('Update menu item "Pagine I livello"');
  await client.menuItems.update("d0X4UgT1SbGeqBmmBso5Zg", {
    position: 1,
    parent: { id: "BobizXeTQfmwLKEJ1r0Vpg", type: "menu_item" },
  });

  console.log('Update menu item "Homepage"');
  await client.menuItems.update("M3H4n0v-TyiJItASDqGRLw", {
    position: 0,
    parent: { id: "BobizXeTQfmwLKEJ1r0Vpg", type: "menu_item" },
  });

  console.log('Update menu item "Pagina di ricerca"');
  await client.menuItems.update("Qo0nr2ewReygHgmsAcmA3Q", {
    position: 3,
    parent: { id: "BobizXeTQfmwLKEJ1r0Vpg", type: "menu_item" },
  });

  console.log('Update menu item "Cataloghi"');
  await client.menuItems.update("Y55A4nbyTI2Fdfi6MrzZSQ", {
    position: 2,
    parent: { id: "BobizXeTQfmwLKEJ1r0Vpg", type: "menu_item" },
  });

  console.log('Update menu item "Articoli interni senza sidebar"');
  await client.menuItems.update("BMMlPr32TAq_T_l7xOLa2A", {
    label: "Articoli interni senza sidebar",
  });

  console.log('Update menu item "Sidebar per articoli interni"');
  await client.menuItems.update("CHphZZXDTwOCsGs__tQ8FQ", {
    label: "Sidebar per articoli interni",
  });

  console.log('Update menu item "Articoli interni con sidebar"');
  await client.menuItems.update("CuadthmbT_esi5VV5l_N4A", {
    label: "Articoli interni con sidebar",
  });

  console.log('Update menu item "Categorie (tags)"');
  await client.menuItems.update("Dqm8812GTQSOAOatApJ_-A", {
    label: "Categorie (tags)",
  });

  console.log('Update menu item "Articoli interni con sidebar"');
  await client.menuItems.update("E_iLgSkZS9KKuMjaBBQBuw", {
    label: "Articoli interni con sidebar",
  });

  console.log('Update menu item "Categoria per filtro (tag)"');
  await client.menuItems.update("F3_FTDpHTq-RHvjMw_z-xg", {
    label: "Categoria per filtro (tag)",
  });

  console.log('Update menu item "Tipologia di risorsa"');
  await client.menuItems.update("F7O_g9p7QUGFk2jYrIqoYQ", {
    label: "Tipologia di risorsa",
  });

  console.log('Update menu item "Webinar ed eventi"');
  await client.menuItems.update("GHKJ1kfCSTqWtw900Tgq2w", {
    label: "Webinar ed eventi",
  });

  console.log('Update menu item "Articoli interni categorizzati"');
  await client.menuItems.update("L_1jgsjHQnekRcgDmxQRlw", {
    label: "Articoli interni categorizzati",
  });

  console.log('Update menu item "Articoli interni categorizzati"');
  await client.menuItems.update("NWO1ME1MQAWflfwOnGcCkQ", {
    label: "Articoli interni categorizzati",
  });

  console.log('Update menu item "Link e risorse"');
  await client.menuItems.update("N0n9Z7gcQg6GOOuNJQ7SSg", {
    label: "Link e risorse",
  });

  console.log('Update menu item "Categoria per filtro (tag)"');
  await client.menuItems.update("OOFYAym5RSCMdNcfgUC_bA", {
    label: "Categoria per filtro (tag)",
  });

  console.log('Update menu item "Contenuto esterno"');
  await client.menuItems.update("O75KPv-JQsahJ9TbZ_hd_Q", {
    label: "Contenuto esterno",
  });

  console.log('Update menu item "Cards contenuto esterno"');
  await client.menuItems.update("PyJgxFm1Q-mswW_XEAE8uw", {
    label: "Cards contenuto esterno",
  });

  console.log('Update menu item "Categoria per filtro (tag)"');
  await client.menuItems.update("R6u6kBzMROy059sqS0_iRA", {
    label: "Categoria per filtro (tag)",
  });

  console.log('Update menu item "Articoli interni senza sidebar"');
  await client.menuItems.update("SF3QYUoPS-SA8qFDRWfZMA", {
    label: "Articoli interni senza sidebar",
  });

  console.log('Update menu item "Categoria per filtro (tag)"');
  await client.menuItems.update("VDVsapglRZSNy8cHDZ6lWQ", {
    label: "Categoria per filtro (tag)",
  });

  console.log('Update menu item "Relatori"');
  await client.menuItems.update("V-NIj8MdTUWMyggA1lNXBw", {
    label: "Relatori",
  });

  console.log('Update menu item "Lista di link e risorse"');
  await client.menuItems.update("dEfittUwTb64JZGR_S2BJQ", {
    label: "Lista di link e risorse",
  });

  console.log('Update menu item "Pagine webinar ed eventi"');
  await client.menuItems.update("dLd4yz66SY2k82xzXOW7nA", {
    label: "Pagine webinar ed eventi",
  });

  console.log('Update menu item "Categoria per filtro (tag)"');
  await client.menuItems.update("d7nNSrRvSDqKe-vmE07Vxw", {
    label: "Categoria per filtro (tag)",
  });

  console.log("Manage schema menu items");

  console.log('Create block schema menu item "Old"');
  await client.schemaMenuItems.create({
    id: "f6iIC8NsQMKvtVgMJ61F-g",
    label: "Old",
    kind: "modular_block",
  });

  console.log(
    'Update block schema menu item for block model "External link" (`external_link`)',
  );
  await client.schemaMenuItems.update("WvjRSKZ3TTCDVqhXOIZ7FA", {
    position: 0,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 1,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Link block" (`link_block`)',
  );
  await client.schemaMenuItems.update("MnzIB4fRRoa4lmvgoDOm0A", {
    position: 3,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 2,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "List item with resources" (`list_item_resource`)',
  );
  await client.schemaMenuItems.update("TSlMhyvFSCClFDc-XYmsvA", {
    position: 4,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Section" (`section`)',
  );
  await client.schemaMenuItems.update("D_DGXbUhQ2GYKz5cBf7y0Q", {
    position: 0,
    parent: { id: "f6iIC8NsQMKvtVgMJ61F-g", type: "schema_menu_item" },
  });

  console.log(
    'Update model schema menu item for model "Story class" (`story_class`)',
  );
  await client.schemaMenuItems.update("KPjG20d3TVCi2MH5FhHURw", {
    parent: { id: "HajK_tQXSGKJ5foj8eu1jQ", type: "schema_menu_item" },
  });

  console.log('Update block schema menu item "Old"');
  await client.schemaMenuItems.update("f6iIC8NsQMKvtVgMJ61F-g", {
    position: 31,
  });

  console.log(
    'Update block schema menu item for block model "Card Link" (`card_link`)',
  );
  await client.schemaMenuItems.update("KVpU7PTQQaaocu6TtULA9Q", {
    position: 5,
  });

  console.log('Update model schema menu item "Articles"');
  await client.schemaMenuItems.update("HfMDZsX6RS6OJCfEGE2cUw", {
    position: 13,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 30,
  });

  console.log('Update model schema menu item "Pages"');
  await client.schemaMenuItems.update("JGmx124qRvqJiP3rJ4Cufw", {
    position: 14,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 22,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 25,
  });

  console.log('Update block schema menu item "Components"');
  await client.schemaMenuItems.update("LIGiN-0eTfea06jXmCO0vA", {
    position: 10,
  });

  console.log('Update block schema menu item "Atoms"');
  await client.schemaMenuItems.update("WMk6e5CwQCOCiC_iV0e-DA", {
    position: 12,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 26,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 24,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 16,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 17,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 23,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 29,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 27,
  });

  console.log('Update block schema menu item "Section block"');
  await client.schemaMenuItems.update("GfAca4qoTAegUR6oaGmmxQ", {
    position: 8,
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
}
