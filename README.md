# eslint-plugin-suitescript-compat

[![CI](https://github.com/hannasdev/eslint-plugin-suitescript-compat/actions/workflows/ci.yml/badge.svg)](https://github.com/hannasdev/eslint-plugin-suitescript-compat/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/eslint-plugin-suitescript-compat.svg)](https://www.npmjs.com/package/eslint-plugin-suitescript-compat)
[![License](https://img.shields.io/badge/license-MIT%20code%20%7C%20CC%20BY%204.0%20docs-blue.svg)](#license)

Unofficial ESLint rules for source-backed NetSuite SuiteScript compatibility
checks. The plugin helps SuiteScript projects catch locally visible version,
module, entry point annotation, and syntax compatibility issues before code
reaches deployment review.

This repository is centered on the
[SuiteScript compatibility ESLint plugin](packages/eslint-plugin-suitescript-compat/README.md),
with supporting source notes and examples for the rule behavior.

It is useful for source-backed SuiteScript projects that want CI feedback on
file-local compatibility signals. It does not replace NetSuite account
validation, deployment records, script records, or Oracle documentation. It is
not affiliated with, endorsed by, or maintained by Oracle or NetSuite.

## Start Here

- [Install and configure the plugin](packages/eslint-plugin-suitescript-compat/README.md#quick-start)
- [Review adoption guidance](packages/eslint-plugin-suitescript-compat/docs/adoption.md)
- [Check current rules](packages/eslint-plugin-suitescript-compat/README.md#rules)
- [Report sensitive security issues privately](SECURITY.md)

## Plugin

- [ESLint plugin package](packages/eslint-plugin-suitescript-compat/README.md)
- [Adoption guide](packages/eslint-plugin-suitescript-compat/docs/adoption.md)
- [Rule source-review guide](packages/eslint-plugin-suitescript-compat/docs/source-review.md)

## Source Notes

- [SuiteScript 1.0 vs 2.0 vs 2.1 in NetSuite 2026.1](docs/suitescript-versions-2026-1.md)
- [Completed initiative notes](docs/initiatives/done/eslint-plugin-suitescript-compat/prd.md)

## Project Posture

This repo is suitable to publish publicly if the content stays in this shape:

- original explanations and analysis
- short factual references with links to official sources
- no copied Oracle/NetSuite documentation pages
- no customer-specific account data, scripts, IDs, configuration, or screenshots

If the repo grows, prefer one Markdown file per topic under `docs/`.

## Release And Change Notes

- [Release automation guide](packages/eslint-plugin-suitescript-compat/docs/release.md)
- [Release log](release-log.md)

## License

Package code is licensed under the [MIT License](LICENSE). Repository prose
documentation and source notes are licensed under the
[Creative Commons Attribution 4.0 International License](LICENSE-CC-BY-4.0.md)
unless a more specific file says otherwise.

The package-local MIT license remains in
[`packages/eslint-plugin-suitescript-compat/LICENSE`](packages/eslint-plugin-suitescript-compat/LICENSE)
so npm package consumers see the same code license in the published package.

Oracle, NetSuite, SuiteScript, and related product names belong to their
respective owners.
