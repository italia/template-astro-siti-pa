import { enableDraftMode } from "@lib/draftMode";
import {
  handleUnexpectedError,
  invalidRequestResponse,
  isRelativeUrl,
} from "@utils/apiUtils";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = (event) => {
  const { url } = event;

  const redirectUrl = url.searchParams.get("url") || "/";
  const type = url.searchParams.get("type");
  const id = url.searchParams.get("id");

  try {
    if (!isRelativeUrl(redirectUrl)) {
      return invalidRequestResponse("URL must be relative!", 422);
    }

    enableDraftMode(event);
  } catch (error) {
    return handleUnexpectedError(error);
  }

  return event.redirect(`/preview${redirectUrl}?type=${type}&id=${id}`, 307);
};
