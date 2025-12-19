import { defineMiddleware } from "astro/middleware";
import type { SiteLocale } from "./graphql/types";

declare namespace App {
  interface Locals {
    locale: SiteLocale;
  }
}

export const onRequest = defineMiddleware((context, next) => {
  const { lang } = context.params;
  if (lang) {
    context.locals.lang = lang;
  }

  return next();
});
