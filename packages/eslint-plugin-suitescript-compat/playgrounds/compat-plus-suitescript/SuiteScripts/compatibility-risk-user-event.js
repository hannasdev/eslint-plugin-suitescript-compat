/**
 * Compare diagnostics:
 * - compat-only: reports SuiteScript 2.x/2.0 compatibility problems.
 * - compat-plus-suitescript: reports those plus general AMD/module hygiene.
 *
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define("custom/compatibilityRisk", ["N/llm", "N/pgp", "N/crypto/random"], (llm, pgp, random) => {
  const value = runtimeContext?.newRecord?.id ?? "missing";

  return {
    beforeLoad: function () {
      return llm || pgp || random || value;
    }
  };
});
