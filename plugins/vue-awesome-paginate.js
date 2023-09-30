import VueAwesomePaginate from "vue-awesome-paginate";
import { defineNuxtPlugin } from "nuxt/app";
import "vue-awesome-paginate/dist/style.css";

// Register the package
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomePaginate);
});
