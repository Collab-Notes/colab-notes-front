import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vuetify from "vite-plugin-vuetify";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  // css: [absPath("./assets/tailwind.css")],

  css: [
    "@core/scss/template/index.scss",
    absPath("./plugins/iconify/icons.css"),
    "@styles/styles.scss",
    "@layouts/styles/index.scss",
  ],

  components: {
    dirs: [
      {
        path: "@core/components",
        pathPrefix: false,
      },
      {
        path: absPath("./components/global"),
        global: true,
      },
      {
        path: absPath("./components"),
        pathPrefix: false,
      },
    ],
  },

  plugins: [
    absPath("./plugins/vuetify/index.ts"),
    absPath("./plugins/iconify/index.ts"),
  ],

  imports: {
    dirs: [
      "@core/utils",
      "@core/composable/",
      absPath("./plugins/*/composables/*"),
    ],
  },

  hooks: {},

  experimental: {
    typedPages: true,
  },

  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        tag === "swiper-container" || tag === "swiper-slide",
    },
  },

  tsConfig: {
    compilerOptions: {
      paths: {
        // folders
        "@layouts/*": [absPath("./@layouts/*")],
        "@layouts": [absPath("./@layouts")],
        "@core/*": [absPath("./@core/*")],
        "@core": [absPath("./@core")],
        "@images/*": [absPath("./assets/images/*")],
        "@styles/*": [absPath("./styles/*")],
        "#template*": [absPath("../*")],
        // files
        "@configured-variables": [absPath("./styles/variables/_template.scss")],
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        "#template": absPath("."),
        // materio template folders
        "@core": absPath("@core"),
        "@layouts": absPath("./@layouts"),
        "@images": absPath("./assets/images"),
        "@styles": absPath("./styles"),
        "@configured-variables": absPath("./styles/variables/_template.scss"),
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          // ℹ️ Because the materio template uses deprecated syntax, turn off warnings
          silenceDeprecations: ["mixed-decls"],
        },
      },
    },
    define: { "process.env": {} },

    build: {
      chunkSizeWarningLimit: 5000,
    },

    optimizeDeps: {
      exclude: ["vuetify"],
      entries: ["./**/*.vue"],
    },

    plugins: [
      svgLoader(),
      vuetify({
        styles: {
          configFile: absPath("./styles/variables/_vuetify.scss"),
        },
      }),
      tailwindcss(),
    ],
  },

  build: {
    transpile: ["vuetify"],
  },
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
