/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: "#00001F",
        headerBtn: "#2E2EFE",
        headerBtnHover: "#2323CC",
        darkBlue: "#0C0C67",
        blueColor: "#17179A",
        servicesTitle: "#323232",
        spectre: "#F7F7F7",
        gray: "#8a8a8a",
        copyRightText: "#B5B5B5",
      },

      boxShadow: {
        headerBtnShadow: " 0px 4px 16px rgba(35, 35, 204, 0.4)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        "2xl": "0rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
