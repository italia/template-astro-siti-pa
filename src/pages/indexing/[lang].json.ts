import type { APIRoute } from "astro";
import { executeQuery } from "../../lib/datocms";
import { AllDocumentsQuery, LocalesQuery } from "../../utils/query";
import type { SiteLocale } from "../../graphql/types";

export async function getStaticPaths() {
  const {
    site: { locales },
  } = await executeQuery(LocalesQuery);
  return locales.map((lang) => ({
    params: {
      lang,
    },
  }));
}

export const prerender = true;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as SiteLocale;

  if (!lang) {
    return new Response("Language parameter is missing", { status: 400 });
  }

  const response = await executeQuery(AllDocumentsQuery, {
    variables: { locale: lang },
  });

  const indexableContent = await Promise.all(
    response.allPages.map(async (post) => {
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        url: `/${lang}/${post.slug}`,
        content: post.content,
      };
    }),
  );

  return new Response(JSON.stringify(indexableContent), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
