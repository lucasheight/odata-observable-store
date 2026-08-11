// @ts-check
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = tseslint.config(
  {
    ignores: [
      "dist/**",
      ".angular/**",
      "coverage/**",
      "node_modules/**",
      "projects/example/e2e/**",
    ],
  },
  {
    files: ["**/*.ts"],
    extends: [
      // Registers the @typescript-eslint plugin, which the inline
      // `eslint-disable @typescript-eslint/*` comments in the sources rely on.
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      prettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: ["tsconfig.json"],
      },
    },
    rules: {
      "@typescript-eslint/no-inferrable-types": 0,
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      // OdataStore and Store take their dependencies as constructor
      // parameters, and consumers subclass them and call super(). Switching to
      // inject() would change the published constructor signature, so it is a
      // 2.0.0 concern rather than a lint fix. The example app is left
      // consistent with the library for the same reason.
      "@angular-eslint/prefer-inject": "off",
      // The example app still bootstraps through NgModule. Converting it to
      // standalone is a separate piece of work.
      "@angular-eslint/prefer-standalone": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {
      // Example templates still use *ngIf; migrating them to @if belongs with
      // the standalone conversion above.
      "@angular-eslint/template/prefer-control-flow": "off",
    },
  },
);
