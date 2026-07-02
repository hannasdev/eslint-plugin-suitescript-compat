# Release Log

Human-readable release notes for user-facing and maintainer-facing repository
changes. New entries are staged here before release or PR publication.

## Unreleased

### 2026-07-02 - SuiteScript 2.0/2.x `let` syntax diagnostic

- What changed: Updated the strict SuiteScript syntax rule to report `let`
  declarations in scripts annotated as `@NApiVersion 2.0` or `2.x` while
  continuing to allow `const` declarations.
- Why it matters: Projects can catch the `let` syntax that NetSuite rejects
  without blocking `const` usage that works in SuiteScript 2.x scripts.
- Who is affected: Package users who enable
  `suitescript-compat/no-2-1-syntax-in-2-0` directly or through the `strict`
  preset.
- Action needed: None.
- PR: https://github.com/hannasdev/eslint-plugin-suitescript-compat/pull/13

### 2026-06-14 - Discoverability metadata and settings verification

- What changed: Expanded npm package keywords for SuiteScript, NetSuite, ESLint,
  linting, and static-analysis search terms, and broadened the maintainer
  checklist to record GitHub metadata and settings that need manual verification
  or deliberate deferral.
- Why it matters: Users can find the package more easily after the next publish,
  and maintainers have a concrete checklist for repository topics, description,
  homepage, branch protection, security features, and support-surface decisions.
- Who is affected: Package consumers, contributors, and maintainers reviewing
  repository discoverability and settings posture.
- Action needed: Set GitHub topics and update the repository description, then
  verify branch protection, security settings, and CodeQL decisions in
  repository settings where the source-controlled checklist still says
  `deferred`.
- PR: https://github.com/hannasdev/eslint-plugin-suitescript-compat/pull/11

### 2026-06-14 - README and license credibility baseline

- What changed: Updated the root README first screen with CI, npm, and license
  signals, clarified the unofficial package value and limitations, and moved
  repository prose documentation licensing to `LICENSE-CC-BY-4.0.md` while
  making the root `LICENSE` MIT for package-code signaling.
- Why it matters: First-time users can now see what the package does, whether
  CI is healthy, where release notes live, and how MIT package code differs
  from CC BY 4.0 prose documentation.
- Who is affected: Package consumers, contributors, and maintainers reviewing
  repository licensing or release maturity.
- Action needed: After merge, inspect GitHub's license/community profile output
  and confirm the license boundary is displayed as intended.
- PR: https://github.com/hannasdev/eslint-plugin-suitescript-compat/pull/10

### 2026-06-14 - Community health and security baseline

- What changed: Added security reporting guidance, a code of conduct, issue and
  pull request templates, CODEOWNERS routing, Dependabot configuration, and a
  maintainer security-settings checklist.
- Why it matters: Contributors and maintainers now have clearer paths for safe
  reports, sanitized issue context, dependency updates, and GitHub-side security
  setting verification.
- Who is affected: Contributors, maintainers, and users reporting bugs,
  documentation concerns, rule requests, or sensitive security issues.
- Action needed: Maintainers should verify GitHub private vulnerability
  reporting and the security settings checklist after merge.
- PR: https://github.com/hannasdev/eslint-plugin-suitescript-compat/pull/9
