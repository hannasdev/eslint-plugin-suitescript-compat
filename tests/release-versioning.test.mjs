import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { compareSemver, determineIncrement } from "../scripts/release-versioning.mjs";

const scriptPath = fileURLToPath(new URL("../scripts/release-versioning.mjs", import.meta.url));

test("detects breaking changes as major releases", () => {
  assert.equal(determineIncrement("feat!: remove legacy option"), "major");
  assert.equal(determineIncrement("fix(parser): tighten behavior\n\nBREAKING CHANGE: rejects old config"), "major");
  assert.equal(determineIncrement("fix(parser): tighten behavior\n\nBREAKING-CHANGE: rejects old config"), "major");
});

test("detects features as minor releases", () => {
  assert.equal(determineIncrement("feat: add workflow action fixtures"), "minor");
  assert.equal(determineIncrement("fix: patch bug\n\nfeat(rules): add new compatibility rule"), "minor");
});

test("falls back to patch releases", () => {
  assert.equal(determineIncrement("fix: correct module detection"), "patch");
  assert.equal(determineIncrement("docs: clarify release process"), "patch");
  assert.equal(determineIncrement("docs: note no breaking changes"), "patch");
});

test("compares SemVer releases and prereleases", () => {
  assert.equal(compareSemver("0.1.0", "0.1.0-alpha.0"), 1);
  assert.equal(compareSemver("0.1.0-alpha.1", "0.1.0-alpha.0"), 1);
  assert.equal(compareSemver("0.1.0-alpha.0", "0.1.0"), -1);
  assert.equal(compareSemver("1.0.0", "0.9.9"), 1);
  assert.equal(compareSemver("1.0.0", "1.0.0"), 0);
});

test("prints usage when assert-not-behind args are missing", () => {
  const result = spawnSync(process.execPath, [scriptPath, "assert-not-behind"], {
    encoding: "utf8"
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Usage: release-versioning\.mjs increment \| assert-not-behind <package-version> <tag-version>/);
});
