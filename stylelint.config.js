/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: [
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
    "**/*.svg",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.json",
    // auto generated files
    ".vscode/**/*",
    ".nuxt/**/*",
    "dist/**/*",
    "node_modules/**/*",
    ".output/**/*",
    ".git/**/*",
    // vuexy
    "src/vendor/materio/@core/**/*",
    "src/vendor/materio/@layouts/**/*",
    "src/vendor/materio/plugins/iconify/**/*",
    "src/app-core/plugins/**/*",
    "src/core/public/**/*",
    // config files
    "*.d.ts",
    ".github/**/*",
    ".env.example.prod",
    ".env.example.stage",
    "lefthook.yml",
    "pnpm-lock.yaml",
    ".prettierignore",
    ".gitignore",
  ],
  cache: true,
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-use-logical-spec"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "liberty/use-logical-spec": true,
    "selector-class-pattern": null,
    "color-function-notation": null,
    "annotation-no-unknown": [
      true,
      {
        ignoreAnnotations: ["default"],
      },
    ],
    "media-feature-range-notation": null,
  },
};
