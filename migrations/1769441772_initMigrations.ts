import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Boolean field "Is search enabled" (`is_search_enabled`) in model "Search" (`search`)',
  );
  await client.fields.create("dSXr54WhSk-BrPLr-titlA", {
    id: "F3fkbrgLSt6I-t23jsiJYw",
    label: "Is search enabled",
    field_type: "boolean",
    api_key: "is_search_enabled",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: true,
  });

  console.log(
    'Create Single-line string field "Search label" (`search_label`) in model "Search" (`search`)',
  );
  await client.fields.create("dSXr54WhSk-BrPLr-titlA", {
    id: "fAL7NMT6Rry39figVEfsOA",
    label: "Search label",
    field_type: "string",
    api_key: "search_label",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Structured text field "Content" (`content`) in model "Article" (`article`)',
  );
  await client.fields.update("VACT72qFRYq6ztu2QwKCLg", {
    hint: "Lorem ipsum dolor sit amet",
  });

  console.log(
    'Update Multiple links field "Cards" (`use_cases`) in block model "Cards container" (`use_case_container`)',
  );
  await client.fields.update("Y1Epx5q9S1SFoTtEwK37cQ", { label: "Cards" });

  console.log(
    'Update Multiple links field "Cards" (`use_cases`) in block model "Use case block" (`use_case_block`)',
  );
  await client.fields.update("Ar_UNbcySZaeeS-OFa8N3w", { label: "Cards" });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Catalogue" (`catalogue`)',
  );
  await client.fields.update("LSx7XQO0Q8q3Hlo1MApE7w", {
    hint: "https://www.datocms-assets.com/166118/1769427065-cards-hub-with-filter.png",
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

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Text + image" (`text_image`)',
  );
  await client.fields.update("AXxedMQ3Qye8mBlimXPdZQ", {
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection: '{\n  "extends": [\n    "backgroundColors"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
  });

  console.log(
    'Update Modular Content (Single block) field "Cards" (`use_cases`) in block model "Text + cards" (`text_use_case`)',
  );
  await client.fields.update("A6YJBeq6T5CZ54wQD-nsBQ", { label: "Cards" });

  console.log(
    'Update Boolean field "Is search enabled" (`is_search_enabled`) in model "Search" (`search`)',
  );
  await client.fields.update("F3fkbrgLSt6I-t23jsiJYw", { position: 1 });

  console.log(
    'Update Single-line string field "Search label" (`search_label`) in model "Search" (`search`)',
  );
  await client.fields.update("fAL7NMT6Rry39figVEfsOA", { position: 2 });

  console.log("Destroy models/block models");

  console.log('Delete model "\uD83D\uDCC3 Page (legacy)" (`page_legacy`)');
  await client.itemTypes.destroy("PkyaHRuiSTGlFeLfGNKlEA", {
    skip_menu_items_deletion: true,
  });

  console.log("Finalize models/block models");

  console.log('Update model "Kpi element" (`kpi_element`)');
  await client.itemTypes.update("MmI20ZtzQ5-AZGWwe6vUlw", {
    name: "Kpi element",
  });

  console.log('Update block model "Impostazioni grafico" (`settings_chart`)');
  await client.itemTypes.update("X6uRmA-9SqeeRsooZF8jtQ", {
    name: "Impostazioni grafico",
  });

  console.log('Update model "Chart element" (`chart_element`)');
  await client.itemTypes.update("K916LfZoQ4Oanx702jvCqA", {
    name: "Chart element",
  });

  console.log('Update block model "Impostazioni Kpi" (`settings_kpi`)');
  await client.itemTypes.update("X26f0kwvTauUuh6Tk2PgrA", {
    name: "Impostazioni Kpi",
  });

  console.log('Update block model "Menu item" (`menu_item`)');
  await client.itemTypes.update("TqVQ1bvYQnuXTJtdJHQ7Lg", {
    name: "Menu item",
  });

  console.log('Update model "Layout" (`layout`)');
  await client.itemTypes.update("P3HYBb3RTOG7iNYtcVNAEg", { name: "Layout" });

  console.log('Update model "Lang" (`lang`)');
  await client.itemTypes.update("F-BgPXl5RlecY6ylmQdGDg", { name: "Lang" });

  console.log('Update block model "Hero" (`hero`)');
  await client.itemTypes.update("Awg0gTrzT1WtWycAQ5I-cw", { name: "Hero" });

  console.log('Update model "Page" (`page`)');
  await client.itemTypes.update("MK1luhfjT5-vyrmLiB0Qeg", { name: "Page" });

  console.log('Update block model "Data container" (`data_container`)');
  await client.itemTypes.update("b6Qg1zeoSA-2m00XNDSM4Q", {
    name: "Data container",
  });

  console.log(
    'Update block model "Support channels section" (`support_channels_section`)',
  );
  await client.itemTypes.update("R9Sa8uDfTpSRaWMISQiDFg", {
    name: "Support channels section",
  });

  console.log('Update block model "Card presentation banner" (`channel`)');
  await client.itemTypes.update("boYJ_9tCSI6ARMr6HycKkA", {
    name: "Card presentation banner",
  });

  console.log(
    'Update block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.itemTypes.update("P2lZlFmYQQKAy4hJdlrI8g", {
    name: "Card editorial with icon",
  });

  console.log('Update block model "Accordion" (`accordion`)');
  await client.itemTypes.update("KmHwDLyUQxy3RqoFfebkew", {
    name: "Accordion",
  });

  console.log('Update block model "Accordion item" (`accordion_item`)');
  await client.itemTypes.update("ZnG6eYxgSV6gUVZPZSaShw", {
    name: "Accordion item",
  });

  console.log('Update block model "FAQ section" (`faq_section`)');
  await client.itemTypes.update("BqiyK44MT9eCdscz8pcESg", {
    name: "FAQ section",
  });

  console.log('Update block model "Data section" (`data_section`)');
  await client.itemTypes.update("ISQ-koGkTSSMpTeQ7yX72w", {
    name: "Data section",
  });

  console.log('Update block model "Statistics box" (`statistics_box`)');
  await client.itemTypes.update("aAJpAlfcTFGYnWkgBeq0vg", {
    name: "Statistics box",
  });

  console.log('Update block model "Highlight" (`highlight`)');
  await client.itemTypes.update("VYZP2JWtR-mtk0r1lewgmA", {
    name: "Highlight",
  });

  console.log('Update block model "Panel" (`panel`)');
  await client.itemTypes.update("bVspCEXaRoO3tjkE1smrHg", { name: "Panel" });

  console.log('Update block model "Result" (`result`)');
  await client.itemTypes.update("G9neLp9yQ8WPXAkq7W3PpQ", { name: "Result" });

  console.log('Update block model "List item" (`list_item`)');
  await client.itemTypes.update("Wl31sz4mSW-_XMSEqkpNAg", {
    name: "List item",
  });

  console.log('Update block model "External link" (`external_link`)');
  await client.itemTypes.update("fhF1HPNNQlKNy5KNGfLtuw", {
    name: "External link",
  });

  console.log('Update model "Article" (`article`)');
  await client.itemTypes.update("PeXbTb7tRvCzyyICsUoedw", { name: "Article" });

  console.log(
    'Update block model "List card editorial with icon" (`list_card_editorial_with_icon`)',
  );
  await client.itemTypes.update("IRda12RgS6maZGJoAyWaKw", {
    name: "List card editorial with icon",
  });

  console.log('Update block model "Ordered list" (`ordered_list`)');
  await client.itemTypes.update("bSjFz6cBSnWfCOaqR-RWVg", {
    name: "Ordered list",
  });

  console.log('Update block model "Note" (`callout`)');
  await client.itemTypes.update("UXCUVsLhQJ2bxgV07x8t5w", {
    name: "Note",
    hint: "https://www.datocms-assets.com/166118/1769000875-note.png",
  });

  console.log('Update block model "Quick link card" (`quick_link_card`)');
  await client.itemTypes.update("IzWzz4YeQcqJ7J34Xie2xg", {
    name: "Quick link card",
  });

  console.log(
    'Update block model "Support CTA section" (`support_cta_section`)',
  );
  await client.itemTypes.update("UKWQ1GcrSWy1u0UVIWhNLg", {
    name: "Support CTA section",
    hint: "https://www.datocms-assets.com/166118/1769418002-support-cta-section-default.png",
  });

  console.log('Update block model "Internal link" (`internal_link`)');
  await client.itemTypes.update("Nwki1YZWRhqgFtIM3Hdgqw", {
    name: "Internal link",
  });

  console.log('Update block model "List internal link" (`list_internal_link`)');
  await client.itemTypes.update("XZTLQo7ARTilBE8YnsreSg", {
    name: "List internal link",
  });

  console.log('Update block model "Topic" (`topic`)');
  await client.itemTypes.update("IywMqmHFTIOlDWoDqPb4yw", { name: "Topic" });

  console.log('Update block model "Cards container" (`use_case_container`)');
  await client.itemTypes.update("eoeVTiI4S362w9-yoe7i6g", {
    name: "Cards container",
    hint: "https://www.datocms-assets.com/166118/1769417505-cards-container.png",
  });

  console.log('Update block model "Topics block" (`topics_block`)');
  await client.itemTypes.update("SYB-ZWCvQq2KdO_yrUxS2g", {
    name: "Topics block",
  });

  console.log('Update model "News item" (`news_item`)');
  await client.itemTypes.update("I7swbqFhSdekgCtytCwk9w", {
    name: "News item",
  });

  console.log('Update model "Global setting" (`global_setting`)');
  await client.itemTypes.update("des80U_2TkCQPszy5emeLA", {
    name: "Global setting",
  });

  console.log('Update block model "Cards section with tab" (`news_feed`)');
  await client.itemTypes.update("RH3d7bWeSlSt4w-W7s3_wg", {
    name: "Cards section with tab",
  });

  console.log('Update model "Homepage" (`homepage`)');
  await client.itemTypes.update("SLA51L-2T_WDOR_8C56bxw", { name: "Homepage" });

  console.log('Update model "Story item" (`story_item`)');
  await client.itemTypes.update("ZO62cMfeSpmP2tBt7g_u6g", {
    name: "Story item",
  });

  console.log('Update block model "Section" (`section`)');
  await client.itemTypes.update("AzPxYAoJRgGAJ3giYJHo4w", { name: "Section" });

  console.log('Update block model "Text block" (`text_block`)');
  await client.itemTypes.update("frtlmkj5RzqxowW3cR78uw", {
    name: "Text block",
  });

  console.log('Update block model "Image block" (`image_block`)');
  await client.itemTypes.update("Lx5afhIlRzS2IxfP0urtSA", {
    name: "Image block",
  });

  console.log('Update block model "Use case block" (`use_case_block`)');
  await client.itemTypes.update("dTeMdBDQQpKqZya83EMMew", { hint: null });

  console.log('Update block model "Accordion block" (`accordion_block`)');
  await client.itemTypes.update("YzB-D5HQQwaV7ur9tPlcpw", {
    name: "Accordion block",
  });

  console.log('Update model "Insight" (`insight`)');
  await client.itemTypes.update("T-HlXkO8SEWb8JYh5FuYCQ", { name: "Insight" });

  console.log('Update block model "Topic filter" (`topic_filter`)');
  await client.itemTypes.update("c2sA3G6uT_q4EBkYwbUqaw", {
    name: "Topic filter",
  });

  console.log('Update model "Webinar item" (`webinar_item`)');
  await client.itemTypes.update("X7ndzI_yTeeyKZWJ8KtKGQ", {
    name: "Webinar item",
  });

  console.log('Update model "Webinar topic" (`webinar_topic`)');
  await client.itemTypes.update("H5OqR2-dT3aORAfk3pLUaQ", {
    name: "Webinar topic",
  });

  console.log('Update model "Catalogue" (`catalogue`)');
  await client.itemTypes.update("c5DDst-qS8q_9mYv71XK9w", {
    name: "Catalogue",
  });

  console.log('Update block model "Cards hub with filter" (`catalogue_feed`)');
  await client.itemTypes.update("T9sEB1HSTya0PUQkEV2i_A", {
    name: "Cards hub with filter",
  });

  console.log('Update model "Insight topic" (`insight_topic`)');
  await client.itemTypes.update("JHxhOzSVRN67lEkTKwRQiA", {
    name: "Insight topic",
  });

  console.log('Update model "Sidebar for articles" (`sidebar_for_article`)');
  await client.itemTypes.update("HTr8wFDARzWuob7fWwvWDA", {
    name: "Sidebar for articles",
  });

  console.log(
    'Update block model "Article structured text" (`structured_text`)',
  );
  await client.itemTypes.update("EAJfEdPjRVy9SJIOnQDM_w", {
    name: "Article structured text",
    hint: "https://www.datocms-assets.com/166118/1769416751-article-structural-text.png",
  });

  console.log('Update block model "Blockquote" (`blockquote`)');
  await client.itemTypes.update("ZllBbdFlST2hh0l-yB-2zA", {
    name: "Blockquote",
  });

  console.log('Update model "Webinar author" (`webinar_author`)');
  await client.itemTypes.update("LyToFeTMQTWJu8q3j7_E0Q", {
    name: "Webinar author",
  });

  console.log('Update model "Article topic" (`article_topic`)');
  await client.itemTypes.update("QPirP_HURvCW8Z46qoATog", {
    name: "Article topic",
  });

  console.log('Update model "Resource" (`resource`)');
  await client.itemTypes.update("E-Cl2G6PSV-MbIo1Lw5buA", { name: "Resource" });

  console.log('Update model "Resource topic" (`resource_topic`)');
  await client.itemTypes.update("MIkfamqyTpKIwUWnNh8Cdw", {
    name: "Resource topic",
  });

  console.log('Update model "Macro topic" (`macro_topic`)');
  await client.itemTypes.update("PNzBtRKsSnKc90MAvnbrrA", {
    name: "Macro topic",
  });

  console.log('Update model "News topic" (`news_topic`)');
  await client.itemTypes.update("ZmTkDRybSzmAn5nLCkSZHg", {
    name: "News topic",
  });

  console.log('Update model "Story topic" (`story_topic`)');
  await client.itemTypes.update("akwrV12FQhOO_nxjblKsuw", {
    name: "Story topic",
  });

  console.log('Update block model "Brand" (`brand`)');
  await client.itemTypes.update("CTrt_dG9RcuokSxQmsa5TQ", { name: "Brand" });

  console.log('Update block model "Text + accordion" (`text_accordion`)');
  await client.itemTypes.update("SC9fd201RBSV7s31u6zCKg", {
    hint: "https://www.datocms-assets.com/166118/1769417619-text-accordions.png",
  });

  console.log('Update block model "Text + cards" (`text_use_case`)');
  await client.itemTypes.update("U50kKrnkSua6L3eIAEFHhA", {
    name: "Text + cards",
    hint: "https://www.datocms-assets.com/166118/1769417684-text-cards.png",
  });

  console.log('Update block model "Intro article" (`intro_article`)');
  await client.itemTypes.update("BUcCRaSrRduMQYR0KakZBg", {
    hint: "https://www.datocms-assets.com/166118/1769417420-intro-article.png",
  });

  console.log('Update block model "Text + speakers" (`speaker`)');
  await client.itemTypes.update("MpUuOvX0QtKo7zJ_gsk5TA", {
    name: "Text + speakers",
    hint: "https://www.datocms-assets.com/166118/1769417323-text-speakers.png",
  });

  console.log(
    'Update block model "Webinar description" (`webinar_description`)',
  );
  await client.itemTypes.update("S6bAtHl6Rxm7J4IMCMeonQ", {
    hint: "https://www.datocms-assets.com/166118/1769417138-webinar-description.png",
  });

  console.log('Update model "Search" (`search`)');
  await client.itemTypes.update("dSXr54WhSk-BrPLr-titlA", { name: "Search" });

  console.log('Update block model "Search bar" (`search_bar`)');
  await client.itemTypes.update("X7Slb5ftTg-P-omcCYEBdQ", {
    name: "Search bar",
  });

  console.log("Manage menu items");

  console.log(
    'Delete menu item "\uD83D\uDDDE\uFE0F Pages legacy (da cancellare)"',
  );
  await client.menuItems.destroy("EH5XbMuvSKCQCvRhDzl9ng");

  console.log('Update menu item "Insight"');
  await client.menuItems.update("L_1jgsjHQnekRcgDmxQRlw", {
    label: "Insight",
    position: 1,
  });

  console.log('Update menu item "Guide"');
  await client.menuItems.update("E_iLgSkZS9KKuMjaBBQBuw", {
    label: "Guide",
    position: 0,
  });

  console.log('Update menu item "Resource"');
  await client.menuItems.update("N0n9Z7gcQg6GOOuNJQ7SSg", {
    label: "Resource",
    position: 2,
  });

  console.log('Update menu item "Global setting"');
  await client.menuItems.update("DcAdX_JhR4e7A7_he8L45Q", {
    label: "Global setting",
    position: 8,
  });

  console.log('Update menu item "Lang"');
  await client.menuItems.update("NtOuqxFbS2yX2a-K30MFrA", {
    label: "Lang",
    position: 9,
  });

  console.log('Update menu item "Webinar Item"');
  await client.menuItems.update("dLd4yz66SY2k82xzXOW7nA", {
    label: "Webinar Item",
    position: 3,
  });

  console.log('Update menu item "Story item"');
  await client.menuItems.update("BMMlPr32TAq_T_l7xOLa2A", {
    label: "Story item",
  });

  console.log('Update menu item "Sidebar for articles"');
  await client.menuItems.update("CHphZZXDTwOCsGs__tQ8FQ", {
    label: "Sidebar for articles",
  });

  console.log('Update menu item "Guide topic"');
  await client.menuItems.update("Dqm8812GTQSOAOatApJ_-A", {
    label: "Guide topic",
  });

  console.log('Update menu item "Webinar topic"');
  await client.menuItems.update("F3_FTDpHTq-RHvjMw_z-xg", {
    label: "Webinar topic",
  });

  console.log('Update menu item "Kpi element"');
  await client.menuItems.update("LIwRWOpQQECyaYrqSGiBMQ", {
    label: "Kpi element",
  });

  console.log('Update menu item "Homepage"');
  await client.menuItems.update("M3H4n0v-TyiJItASDqGRLw", {
    label: "Homepage",
  });

  console.log('Update menu item "Insight topic"');
  await client.menuItems.update("OOFYAym5RSCMdNcfgUC_bA", {
    label: "Insight topic",
  });

  console.log('Update menu item "News Item"');
  await client.menuItems.update("PyJgxFm1Q-mswW_XEAE8uw", {
    label: "News Item",
  });

  console.log('Update menu item "Search"');
  await client.menuItems.update("Qo0nr2ewReygHgmsAcmA3Q", { label: "Search" });

  console.log('Update menu item "Story topic"');
  await client.menuItems.update("R6u6kBzMROy059sqS0_iRA", {
    label: "Story topic",
  });

  console.log('Update menu item "Macro topic"');
  await client.menuItems.update("VDVsapglRZSNy8cHDZ6lWQ", {
    label: "Macro topic",
  });

  console.log('Update menu item "Webinar author"');
  await client.menuItems.update("V-NIj8MdTUWMyggA1lNXBw", {
    label: "Webinar author",
  });

  console.log('Update menu item "Layout"');
  await client.menuItems.update("Wn8JsOFrSQitHeuOGHJqng", { label: "Layout" });

  console.log('Update menu item "Catalogue"');
  await client.menuItems.update("Y55A4nbyTI2Fdfi6MrzZSQ", {
    label: "Catalogue",
  });

  console.log('Update menu item "Chart element"');
  await client.menuItems.update("bjspyoyVTEGJduGtFooexQ", {
    label: "Chart element",
  });

  console.log('Update menu item "News topic"');
  await client.menuItems.update("d7nNSrRvSDqKe-vmE07Vxw", {
    label: "News topic",
  });

  console.log("Manage schema menu items");

  console.log('Update model schema menu item for model "Lang" (`lang`)');
  await client.schemaMenuItems.update("d_cfpGK1Qd-gPD1Wj1lVbg", {
    position: 21,
  });

  console.log(
    'Update block schema menu item for block model "External link" (`external_link`)',
  );
  await client.schemaMenuItems.update("WvjRSKZ3TTCDVqhXOIZ7FA", {
    position: 25,
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 26,
  });

  console.log('Update model schema menu item "Articles"');
  await client.schemaMenuItems.update("HfMDZsX6RS6OJCfEGE2cUw", {
    position: 8,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 22,
  });

  console.log(
    'Update block schema menu item for block model "Brand" (`brand`)',
  );
  await client.schemaMenuItems.update("e_jNqAb6SAOLPTRHuUr5ZQ", {
    position: 28,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 24,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    label: "Story",
    position: 18,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    label: "News",
    position: 19,
  });

  console.log('Update model schema menu item "Pages"');
  await client.schemaMenuItems.update("JGmx124qRvqJiP3rJ4Cufw", {
    position: 9,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 27,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    label: "Webinar",
    position: 17,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    label: "Resource",
    position: 20,
  });

  console.log('Update block schema menu item "Section block"');
  await client.schemaMenuItems.update("GfAca4qoTAegUR6oaGmmxQ", {
    label: "Section block",
    position: 4,
  });

  console.log('Update block schema menu item "Components"');
  await client.schemaMenuItems.update("LIGiN-0eTfea06jXmCO0vA", {
    label: "Components",
    position: 5,
  });

  console.log('Update block schema menu item "Atoms"');
  await client.schemaMenuItems.update("WMk6e5CwQCOCiC_iV0e-DA", {
    label: "Atoms",
    position: 7,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    label: "Navigation",
    position: 23,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    label: "Chart",
    position: 15,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    label: "Insight",
    position: 16,
  });
}
