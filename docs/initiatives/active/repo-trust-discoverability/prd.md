# Repository Trust And Discoverability

## Status

- State: Active
- Owner: @hannasdev
- Created: 2026-06-14
- Related docs:
  - [Root README](../../../../README.md)
  - [Contributing guide](../../../../CONTRIBUTING.md)
  - [Package README](../../../../packages/eslint-plugin-suitescript-compat/README.md)
  - [Release docs](../../../../packages/eslint-plugin-suitescript-compat/docs/release.md)

## Problem

The repository is public and already contains useful source-backed SuiteScript
tooling, docs, tests, CI, and npm publishing automation. However, it is still
missing several trust and discoverability signals that open source users,
contributors, GitHub, and package consumers commonly rely on before adopting a
tool.

Current gaps include:

- no top-level `SECURITY.md` that tells users how to report vulnerabilities
- no issue templates, pull request template, or code owner routing
- no Dependabot configuration for npm or GitHub Actions maintenance
- no GitHub topics, which reduces search and ecosystem discoverability
- no root README badges or concise adoption/value signals
- root license detection reports a non-standard repository license because the
  root license is CC BY 4.0 while the package is MIT
- no documented branch protection, code scanning, or repository setting posture

These gaps do not mean the package is unsafe, but they make the project look
less mature than its source-backed implementation and release workflows already
are.

## Goals

- Improve repository credibility for first-time visitors and potential package
  adopters.
- Make security reporting and maintenance expectations explicit.
- Improve GitHub and npm discoverability through metadata, keywords, badges,
  and clearer public-facing copy.
- Clarify the repository's docs/code license boundaries without weakening the
  package's MIT license or the existing source-backed documentation posture.
- Add lightweight governance files that reduce maintainer ambiguity for issues,
  pull requests, and sensitive reports.
- Document which repository settings should be enabled outside source control.

## Non-Goals

- Do not change lint rule behavior.
- Do not add new SuiteScript compatibility checks.
- Do not publish a new package version solely for metadata that does not affect
  the npm package.
- Do not make claims of Oracle or NetSuite endorsement.
- Do not require a new website, documentation framework, or GitHub Pages launch
  in the first milestone.
- Do not introduce heavyweight governance processes that would discourage small
  contributions.

## Product And Design Alignment

This repository's trust model is practical, source-backed, and conservative:
original explanations, links to official Oracle NetSuite sources where
possible, clear caveats, and no customer-specific data. The repository trust
work should follow the same posture.

Public-facing copy should make the project easy to understand quickly:

- what the package checks
- when it is useful
- what it does not replace
- how to report security issues
- how licensing applies to package code versus prose documentation

The outcome should feel like a careful open source utility, not a marketing
site.

## Proposed Solution

Create a small repository trust and discoverability pass that adds community
health files, clarifies licensing, improves public metadata, and records
security-related repository settings.

Expected source-controlled changes:

- `SECURITY.md`
- `CODE_OF_CONDUCT.md`
- `.github/ISSUE_TEMPLATE/*`
- `.github/pull_request_template.md`
- `.github/CODEOWNERS`
- `.github/dependabot.yml`
- README badges and clearer first-screen value copy
- package keyword improvements
- license boundary cleanup or explicit license documentation
- maintainer checklist for repository settings that cannot be fully represented
  in source files

Expected GitHub setting updates:

- repository topics for SuiteScript, NetSuite, ESLint, linting, and static
  analysis
- clearer repository description
- branch protection requiring CI before merge
- Dependabot alerts/security updates
- GitHub private vulnerability reporting
- secret scanning and push protection where available
- CodeQL or equivalent code scanning if appropriate for a small JavaScript
  package

## User / Maintainer Workflows

- A potential user lands on the GitHub repository and sees CI, npm, license, and
  security posture signals before evaluating rule details.
- A user finds the package through GitHub topics or npm keywords while searching
  for SuiteScript linting or NetSuite static analysis.
- A contributor opens an issue or PR using templates that ask for the minimum
  context needed without collecting customer-specific data.
- A reporter with a vulnerability concern finds `SECURITY.md` and avoids filing
  sensitive details in a public issue.
- A maintainer receives Dependabot updates for npm dependencies and GitHub
  Actions with clear CI validation.

## Acceptance Criteria

- [ ] GitHub community health files exist for security reporting, conduct,
  issues, pull requests, and code ownership.
- [ ] Dependency maintenance is configured for npm and GitHub Actions.
- [ ] Root README communicates the package value, status, CI, npm, license, and
  unofficial posture within the first screen.
- [ ] License boundaries are machine-recognizable or clearly documented so users
  can distinguish MIT package code from CC BY prose documentation.
- [ ] GitHub and npm metadata include relevant SuiteScript, NetSuite, ESLint,
  linting, and static analysis search terms.
- [ ] Repository settings that cannot be represented in files are documented and
  checked after implementation.

## Risks And Tradeoffs

| Risk | Impact | Mitigation / Decision Path |
| --- | --- | --- |
| License cleanup accidentally changes rights for existing prose docs | Users or maintainers misunderstand reuse terms | Keep an explicit license boundary section and review root/package license files before merge. |
| Security policy promises a response process the maintainer cannot meet | Credibility loss | Use realistic response language and avoid guaranteed SLA language unless the owner approves it. |
| Templates ask for customer-specific details | Users may disclose sensitive NetSuite data | Include warnings against account IDs, internal URLs, screenshots, tokens, and proprietary code. |
| More badges and metadata make the README noisy | First-time readers miss the actual package value | Keep badges minimal and put setup details in the package README. |
| Code scanning or branch protection creates maintainer friction | Small fixes become harder to merge | Start with CI-required protection and document optional stronger settings separately. |

## Testing Strategy

This initiative is mostly documentation, metadata, and repository configuration.
Validation should include:

- `npm test` after package metadata or workflow changes
- GitHub community profile check after community file changes
- `npm pack --dry-run --workspace eslint-plugin-suitescript-compat` after
  package metadata or files-list changes
- manual review of README, templates, and security policy for unofficial
  Oracle/NetSuite posture
- manual GitHub settings review for topics, branch protection, Dependabot,
  secret scanning, and code scanning

## Completed Decisions

- [x] Keep this initiative in backlog until explicitly activated.
- [x] Include architecture notes because the initiative changes security posture,
  repository governance, release-adjacent metadata, and external GitHub
  settings.
- [x] Keep the work scoped to trust and discoverability; lint rule behavior is
  out of scope.
- [x] Use GitHub private vulnerability reporting as the private security report
  path.
- [x] Use `@hannasdev` as the default owner and CODEOWNERS reviewer.
- [x] Prefer root MIT license detection by making the root `LICENSE` MIT,
  moving CC BY 4.0 prose licensing to `LICENSE-CC-BY-4.0.md`, and documenting
  that docs/prose remain CC BY unless otherwise stated.
