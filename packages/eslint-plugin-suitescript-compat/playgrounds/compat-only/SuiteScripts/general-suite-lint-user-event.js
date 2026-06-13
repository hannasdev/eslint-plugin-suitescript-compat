/**
 * Compare diagnostics:
 * - compat-only: should not report this file because it targets 2.1 and has
 *   required SuiteScript tags.
 * - compat-plus-suitescript: reports general SuiteScript lint issues such as
 *   named AMD module, invalid module, module variable mismatch, N/log import,
 *   log args, extra modules, and missing User Event entry point.
 *
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define("custom/generalSuiteLint", ["N/record", "N/log", "N/notARealModule"], function (rec) {
  log.debug("Only a title");

  return {
    notAnEntryPoint: function () {
      return rec;
    }
  };
});
