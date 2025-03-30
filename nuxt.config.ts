import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
  },

  supabase: {
    redirect: false,
  },

  app: {
    head: {
      titleTemplate: "%s | Colab Notes",

      htmlAttrs: {
        lang: "es",
      },

      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${process.env.NUXT_APP_BASE_URL}/favicon.ico`,
        },
      ],
    },
  },

  /**
   * replaces <srcDir>
   *  @see/ https://nuxt.com/docs/api/nuxt-config#alias
   */
  srcDir: "./src",

  extends: [
    "src/vendor/materio",
    // DDD architecture / folder structure with nuxt layers
    "src/features/auth",
    "src/features/vault",
    "src/features/home",
  ],

  components: {
    dirs: [
      {
        path: "~/common/components",
        pathPrefix: false,
        global: true,
      },
    ],
  },

  // for auto-imports
  imports: {
    dirs: [
      "./common/composables/**/*.ts",
      "./common/utils/**/*.ts",
      "./common/stores/*.ts",
    ],
  },

  /** path aliases for custom DDD architecture  */
  dir: {
    // app-core
    middleware: "app-core/middleware",
    plugins: "app-core/plugins",
    layouts: "app-core/layouts",
    public: "app-core/public",

    // commom
    assets: "app-core/assets",
  },

  // Only for common server utils
  serverDir: "common/server",

  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: fileURLToPath(new URL("./src", import.meta.url)),
        paths: {
          "~/*": ["./*"],
        },
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    plugins: [tailwindcss()],
  },

  css: [fileURLToPath(new URL("./src/app-core/tailwind.css", import.meta.url))],

  devtools: { enabled: true },
  compatibilityDate: "2025-03-10",

  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "@nuxtjs/supabase",
  ],
});
