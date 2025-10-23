import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~~/app/assets/style/main.css"],
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
});
