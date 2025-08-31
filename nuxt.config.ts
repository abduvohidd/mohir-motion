// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/i18n", "nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/satoshi',
        },
      ],
    },
  },

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
});
