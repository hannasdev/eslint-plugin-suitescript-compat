"use strict";

const suitescript = require("eslint-plugin-suitescript");
const suitescriptCompat = require("eslint-plugin-suitescript-compat");

module.exports = [
  ...suitescript.configs.recommended.map((config) => ({
    ...config,
    files: ["SuiteScripts/**/*.js"]
  })),
  ...suitescript.configs.suitescript2.map((config) => ({
    ...config,
    files: ["SuiteScripts/**/*.js"]
  })),
  {
    files: ["SuiteScripts/**/*.js"],
    ...suitescriptCompat.configs.strict,
    settings: {
      suitescript: {
        entrypointGlobs: ["SuiteScripts/**/*.js"],
        defaultScriptContext: "server"
      }
    }
  }
];
