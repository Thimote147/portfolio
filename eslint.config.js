import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      prettier: prettierPlugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error"
    }
  }
];
