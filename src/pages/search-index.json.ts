import type { APIRoute } from "astro";
import { executeQuery } from "../lib/datocms";
import { AllDocumentsQuery } from "../utils/query";

/* TODO: gestire multilingua */
export const GET: APIRoute = async () => {
  const response = await executeQuery(AllDocumentsQuery);

  const indexableContent = await Promise.all(
    response.allPages.map(async (post) => {
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        url: `/it/${post.slug}`,
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

export const prerender = true;
