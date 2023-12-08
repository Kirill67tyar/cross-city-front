import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-swiper", "@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap"],
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination", "autoplay"],
  },
  $production: {
    routeRules: {
      "./**": { isr: true },
    },
  },
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },
  spaLoadingTemplate: false,
});
