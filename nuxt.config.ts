// https://nuxt.com/docs/api/configuration/nuxt-config
import * as daisyui from "daisyui";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [daisyui],
    },
  },
});
