import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-swiper", "@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],

      title: "Cross city - Междугороднее такси из Москвы по всей России",

      meta: [
        {
          name: "description",
          content:
            "Кросс сити такси» предоставляет услуги междугороднего такси по всей России круглосуточно, по доступным ценам и с комфортом",
        },
        {
          name: "yandex-verification",
          content: "8f8820d36207c1d0",
        },
      ],
    },
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
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination", "autoplay"],
  },
  spaLoadingTemplate: false,
});
