import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y from "eslint-plugin-jsx-a11y";

// update this to ignore .js files and js config files

export default [
  // Global ignores - these files will be ignored by all configurations
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
    ],
  },

  // JavaScript configuration (just in case some JS files should be linted)
  {
    files: ["**/*.{mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },

  // TypeScript configuration
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.{ts,mts,cts,tsx}"],
  })),

  // React configuration
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: { version: "detect" },
    },
  },
  jest.configs["flat/style"],
  eslintPluginPrettierRecommended,
  jsxA11y.flatConfigs.recommended,
];
