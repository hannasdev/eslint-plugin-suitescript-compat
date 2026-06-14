# Release Log

Human-readable release notes for user-facing and maintainer-facing repository
changes. New entries are staged here before release or PR publication.

## Unreleased

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
