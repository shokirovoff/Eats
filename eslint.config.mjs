import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    'node': true,
    languageOptions: {sourceType: "module"}
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
];