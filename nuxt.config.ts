import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-swiper", "@nuxtjs/tailwindcss"],
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
