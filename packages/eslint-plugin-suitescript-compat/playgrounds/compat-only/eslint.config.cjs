"use strict";

const suitescriptCompat = require("eslint-plugin-suitescript-compat");

module.exports = [
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
