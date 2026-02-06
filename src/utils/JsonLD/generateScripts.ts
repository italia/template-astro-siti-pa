import type { SiteLocale } from "@graphql/types";
import {
  buildBreadcrumbJsonLd,
  buildCollectionJsonLd,
  buildCommonJsonLd,
  buildContentJsonLd,
  buildFaqJsonLd,
  buildListJsonLd,
  getArticleSection,
  getChildListItems,
  getPageTitle,
  toSchemaLanguage,
  type JsonLdPageData,
} from "@utils/JsonLD/seoJsonLd";

export const generateJsonLdScripts = ({
  jsonLd,
  lang,
  siteUrl,
  canonicalUrl,
  recordId,
}: {
  jsonLd?: JsonLdPageData;
  lang: SiteLocale;
  siteUrl: string | URL;
  canonicalUrl: string;
  recordId: string;
}) => {
  const languageTag = toSchemaLanguage(lang || "it");

  const scripts: Array<Record<string, any>> = [buildCommonJsonLd(siteUrl)];

  if (!jsonLd) {
    return scripts;
  }

  const pageName = getPageTitle(recordId, lang, jsonLd.seo);
  const description = jsonLd.seo?.description;
  const imageUrl = jsonLd.seo?.image?.url || null;

  if (jsonLd.pageType.includes("collection")) {
    const items = getChildListItems(recordId, lang, siteUrl);
    console.log("Collection items:", items);
    const collectionLd = buildCollectionJsonLd({
      canonicalUrl,
      siteUrl,
      inLanguage: languageTag,
      name: pageName,
      description,
      listItems: items,
    });
    if (collectionLd) scripts.push(collectionLd);
  }

  if (jsonLd.pageType.includes("list") && jsonLd.listItems?.length) {
    const collectionLd = buildListJsonLd({
      canonicalUrl,
      siteUrl,
      inLanguage: languageTag,
      name: pageName,
      description,
      listItems: jsonLd.listItems,
    });

    if (collectionLd) scripts.push(collectionLd);
  }

  if (jsonLd.pageType.includes("content")) {
    const contentLd = buildContentJsonLd({
      canonicalUrl,
      siteUrl,
      inLanguage: languageTag,
      name: pageName,
      description,
      articleType: jsonLd.articleType,
      articleSection: getArticleSection(recordId, lang),
      publishedAt: jsonLd.publishedAt || undefined,
      updatedAt: jsonLd.updatedAt || undefined,
      imageUrl,
    });
    scripts.push(contentLd);
  }

  const breadcrumb = buildBreadcrumbJsonLd({
    canonicalUrl,
    recordId,
    locale: lang,
    siteUrl,
  });
  if (breadcrumb) scripts.push(breadcrumb);

  if (jsonLd.faq?.length) {
    const faqLd = buildFaqJsonLd({ canonicalUrl, faq: jsonLd.faq });
    if (faqLd) scripts.push(faqLd);
  }

  return scripts;
};
