import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    resolve: {
      alias: {
        "#template": absPath("."),
      },
    },
    plugins: [tailwindcss()],
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: absPath("."),
        paths: {
          "#template/*": ["./*"],
        },
      },
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".app-dark",
        },
      },
    },
  },

  components: [{ path: "components", pathPrefix: false, }],
  css: [absPath("./assets/tailwind.css"), absPath("./assets/styles.scss")],

  modules: ["@primevue/nuxt-module"],
});

/**
 * get absoulte path of relative one
 *
 * Workaround to get path aliases working in Nuxt layers
 * @see https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
 */
function absPath(path: string) {
  return fileURLToPath(new URL(path, import.meta.url));
}
