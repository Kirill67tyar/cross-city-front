import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-swiper"],
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination"],
  },
  $production: {
    routeRules: {
      "./**": { isr: true },
    },
  },
  spaLoadingTemplate: false,
});
