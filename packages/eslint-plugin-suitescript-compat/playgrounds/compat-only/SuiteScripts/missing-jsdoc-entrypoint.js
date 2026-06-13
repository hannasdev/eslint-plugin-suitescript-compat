/*
 * Compare diagnostics:
 * - compat-only: reports the missing API version and script type tags because
 *   this file is matched by entrypointGlobs.
 * - compat-plus-suitescript: reports the same compatibility diagnostics; the
 *   community plugin does not require missing tags when they are absent.
 */
define([], function () {
  return {
    beforeLoad: function () {
      return true;
    }
  };
});
