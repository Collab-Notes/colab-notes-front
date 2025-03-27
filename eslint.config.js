// @ts-check
import eslintConfigPrettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    ignores: [
      "dist",
      "node_modules",
      ".nuxt",
      ".output",
      ".vscode",
      ".github",
      // vuexy
      "src/app-core/public/**/*",
      "src/vendor/materio/plugins/iconify/**/*",
      "src/vendor/materio/@core/**/*",
      "src/vendor/materio/@layouts/**/*",
      // vuexy
      "*.d.ts",
      "*.json",
      "lefthook.yml",
      ".env.example.prod",
      ".env.example.stage",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      "no-debugger": "warn",

      // theme vuexy default configs (might be useful?)
      "no-restricted-imports": [
        "error",
        "vuetify/components",
        {
          name: "vue3-apexcharts",
          message: "apexcharts are auto imported",
        },
      ],

      // "@typescript-eslint/consistent-type-imports": "error",
      // -- Vue Rules --
      "vue/component-api-style": "error",
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
          ignores: ["/^swiper-/"],
        },
      ],
      "vue/multi-word-component-names": [
        "off",
        {
          ignores: ["**/pages/**/*"],
        },
      ],
      "vue/custom-event-name-casing": [
        "error",
        "camelCase",
        {
          ignores: ["/^(click):[a-z]+((d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/"],
        },
      ],
      "vue/camelcase": "error",

      "vue/html-comment-content-newline": "error",
      "vue/match-component-file-name": "error",
      "vue/no-child-content": "error",
      "vue/require-default-prop": "error",
      "vue/no-empty-component-block": "error",
      "vue/padding-line-between-blocks": "error",

      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-template-target-blank": "error",
      "vue/valid-v-slot": [
        "error",
        {
          allowModifiers: true,
        },
      ],

      "vue/define-macros-order": "error",
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/no-v-html": "off",
      // -- Vue Rules --
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: {},
      },
    },
  },
  eslintConfigPrettier,
]);
