// eslint.config.mjs

import nextPlugin from "eslint-config-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/**
 * ESLint Flat Config for Next.js 16 + TypeScript
 * Compatible with eslint@9 and eslint-config-next@16
 */
const config = [
  // Base Next.js config (includes react, jsx-a11y, etc.)
  ...nextPlugin,

  // Our own TS + project-wide overrides
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // You can relax or tighten these as you like
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    ignores: [
      "node_modules/",
      ".next/",
      "dist/",
      ".vercel/",
    ],
  },
];

export default config;
