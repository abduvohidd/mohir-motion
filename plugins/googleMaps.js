import Vue from "vue";
import VueGoogleMaps from "vue3-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAkNF2jDmfg-aJFFAwkxOLisnqmtkcHoV0",
    libraries: "places",
  },
});
