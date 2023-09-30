import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  // const defaultUrl = "https://api.staging.spectre-energy.uz/api/";

  let api = axios.create({
    baseURL: "https://api.staging.spectre-energy.uz/api/",
    headers: {
      common: {},
    },
  });

  // Add a response interceptor
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      clearError({ redirect: "/server-error" });
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      api: api,
    },
  };
});
