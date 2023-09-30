// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/i18n", "nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt"],

  // pinia: {
  //   autoImports: [
  //     // automatically imports `defineStore`
  //     "defineStore", // import { defineStore } from 'pinia'
  //     ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
  //   ],
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "~/plugins/googleMaps" },
    { src: "~/plugins/vue-awesome-paginate" },
  ],

  // i18n: {
  //   locales: [
  //     {
  //       code: "uz",
  //       file: "uz.json",
  //       name: "lang.uz",
  //     },
  //     {
  //       code: "ru",
  //       file: "ru.json",
  //       name: "lang.ru",
  //     },
  //     {
  //       code: "en",
  //       file: "en.json",
  //       name: "lang.en",
  //     },
  //   ],
  //   langDir: "./lang",
  //   strategy: "prefix_and_default",
  //   defaultLocale: "ru", // if you are using custom path, default
  // },
});
