// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
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
    "src/vendor/sakai-vue",
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
    // core
    middleware: "core/middleware",
    plugins: "core/plugins",
    layouts: "core/layouts",
    public: "core/public",

    // commom
    assets: "core/assets",
  },
  serverDir: "common/server",

  devtools: { enabled: true },
  compatibilityDate: "2025-03-10",

  modules: ["@nuxt/eslint", "@pinia/nuxt", "@vee-validate/nuxt"],
});
