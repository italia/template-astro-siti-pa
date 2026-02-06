import type { CatalogueIndexingFragmentType } from "@graphql/query/indexing";
import type {
  AllStoryItemsSlugFragmentType,
  AllWebinarItemsSlugFragmentType,
  HomepageFragmentType,
} from "@graphql/slugFragments";
import type { SiteLocale } from "@graphql/types";
import { executeQuery } from "@lib/datocms";
import { getCataloguesMapCategory } from "@utils/indexing/getCategory";
import { resolveRoutePath, type RoutableRecord } from "@utils/pathHelper";
import { AllLinkQuery } from "@utils/query";
import fs from "fs";
import path from "path";

const outputPath = `src/data/linkMap.json`;

type HasTitles = {
  allTitleLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
};

type BreadcrumbStep = {
  title: string;
  id: string;
};

type PageRouteInfo = {
  path: string;
  breadcrumb: BreadcrumbStep[];
};

type LocaleMap = Record<SiteLocale, PageRouteInfo>;

type SiteMap = Record<string, LocaleMap>;

const getTitle = (item: HasTitles, locale: string) =>
  item?.allTitleLocales?.find((t) => t.locale === locale)?.value || "No title";

/* Qui c'è da spacchettare in base alle risorse */
const processItemsPages = <T extends RoutableRecord>(
  items: T[],
  linkMap: SiteMap,
  home: HomepageFragmentType | null,
) => {
  items?.forEach((item) => {
    linkMap[item.id] = {} as LocaleMap;

    item.locales.forEach((locale) => {
      const { fullPath, steps } = resolveRoutePath(item, locale, items);
      const prefix = `/${locale}`;

      linkMap[item.id][locale] = {
        path: `${prefix}/${fullPath}`,
        breadcrumb: [],
      };

      if (home) {
        linkMap[item.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }

      linkMap[item.id][locale].breadcrumb.push(
        ...steps.map((step: any) => ({
          title: step.title,
          id: step.id,
        })),
      );
    });
  });
};

const processItemsNestedPages = <T extends RoutableRecord>(
  items: T[],
  linkMap: SiteMap,
  home: HomepageFragmentType | null,
) => {
  items?.forEach((item) => {
    linkMap[item.id] = {} as LocaleMap;

    item.locales.forEach((locale) => {
      const { fullPath, steps } = resolveRoutePath(item, locale, items);
      const prefix = `/${locale}`;

      linkMap[item.id][locale] = {
        path: `${prefix}/${fullPath}`,
        breadcrumb: [],
      };

      if (home) {
        linkMap[item.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }

      linkMap[item.id][locale].breadcrumb.push(
        ...steps.slice(0, 2).map((step: any) => ({
          title: step.title,
          id: step.id,
        })),
      );
    });
  });
};

const processItemsCategoryPages = <T extends RoutableRecord>(
  items: T[],
  linkMap: SiteMap,
  home: HomepageFragmentType | null,
) => {
  items?.forEach((item) => {
    linkMap[item.id] = {} as LocaleMap;

    item.locales.forEach((locale) => {
      const { fullPath, steps } = resolveRoutePath(item, locale, items);
      const prefix = `/${locale}`;

      linkMap[item.id][locale] = {
        path: `${prefix}/${fullPath}`,
        breadcrumb: [],
      };

      if (home) {
        linkMap[item.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }

      const otherSteps = steps.slice(0, -1);
      const lastStep = steps[steps.length - 1];

      linkMap[item.id][locale].breadcrumb.push(
        ...otherSteps.map((step: any) => ({
          title: step.title,
          id: step.id,
        })),
        {
          title: lastStep.category || "",
          id: lastStep.id,
        },
      );
    });
  });
};

const processItemsTabPages = <
  T extends AllWebinarItemsSlugFragmentType | AllStoryItemsSlugFragmentType,
>(
  items: T[],
  linkMap: SiteMap,
  home: HomepageFragmentType | null,
  allTabs: CatalogueIndexingFragmentType[],
) => {
  items?.forEach((item) => {
    linkMap[item.id] = {} as LocaleMap;

    item.locales.forEach((locale) => {
      const tabsCategory = getCataloguesMapCategory(allTabs, locale);
      const allCategory = tabsCategory.flatMap((cat) => cat.type);
      const targetType = item.modelApiKey;

      const category = allCategory.find(
        (item) => item.type === targetType,
      )?.title;

      const { fullPath, steps } = resolveRoutePath(
        item,
        locale,
        items,
        category,
      );
      const prefix = `/${locale}`;

      linkMap[item.id][locale] = {
        path: `${prefix}/${fullPath}`,
        breadcrumb: [],
      };

      if (home) {
        linkMap[item.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }

      const otherSteps = steps.slice(0, -1);
      const lastStep = steps[steps.length - 1];

      linkMap[item.id][locale].breadcrumb.push(
        ...otherSteps.map((step: any) => ({
          title: step.title,
          id: step.id,
        })),
        {
          title: lastStep.category || "",
          id: lastStep.id,
        },
      );
    });
  });
};

async function generateLinkMap() {
  console.log(`Generating link map...`);

  const data = await executeQuery(AllLinkQuery);
  const linkMap: SiteMap = {};
  const home = data.homepage;

  if (home) {
    linkMap[home.id] = {} as LocaleMap;
    home.locales.forEach((locale) => {
      linkMap[home.id][locale] = {
        path: `/${locale}`,
        breadcrumb: [],
      };
    });
  }

  const search = data.search;

  if (search) {
    linkMap[search.id] = {} as LocaleMap;
    search.locales.forEach((locale) => {
      linkMap[search.id][locale] = {
        path: `/${locale}/${search.allSlugLocales?.find((t) => t.locale === locale)?.value}`,
        breadcrumb: [],
      };
      if (home) {
        linkMap[search.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }
      linkMap[search.id][locale].breadcrumb.push({
        title: getTitle(search, locale),
        id: search.id,
      });
    });
  }

  const collectionPages = [data.allPages, data.allCatalogues];

  collectionPages.forEach((collection) =>
    processItemsPages(collection, linkMap, home),
  );

  const collectionNestedPages = [data.allArticles];

  collectionNestedPages.forEach((collection) =>
    processItemsNestedPages(collection, linkMap, home),
  );

  const collectionCategoryPages = [data.allInsights];

  collectionCategoryPages.forEach((collection) =>
    processItemsCategoryPages(collection, linkMap, home),
  );

  const collectionTabPages = [data.allStoryItems, data.allWebinarItems];

  collectionTabPages.forEach((collection) =>
    processItemsTabPages(collection, linkMap, home, data.allCatalogues),
  );

  const fullOutputPath = path.resolve(outputPath);
  if (!fs.existsSync(path.dirname(fullOutputPath))) {
    fs.mkdirSync(path.dirname(fullOutputPath), { recursive: true });
  }

  fs.writeFileSync(fullOutputPath, JSON.stringify(linkMap, null, 2));
  console.log(`Map successfully generated at: ${outputPath}`);
}

async function run() {
  try {
    await generateLinkMap();
    console.log("All link maps generated successfully.");
  } catch (error) {
    console.error("Error generating link maps:", error);
    process.exit(1);
  }
}

run();
