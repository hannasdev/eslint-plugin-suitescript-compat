# Maintainer Security And Repository Settings Checklist

This checklist records repository settings that are partly or fully managed in
GitHub rather than source control. Use these status values when updating the
table: `enabled`, `verified unavailable`, `no access`, `deferred`, or
`left disabled`.

| Setting | Desired State | Status | Notes |
| --- | --- | --- | --- |
| Repository visibility | Public. | enabled | Verified through the GitHub connector and public GitHub API during M3 implementation. |
| Issues | Enabled for public bug, rule request, documentation, and hardening reports. | enabled | Verified through the public GitHub API during M3 implementation. |
| Repository license detection | MIT package-code signal is detected by GitHub. | enabled | Public GitHub API reports `MIT License` / `MIT` after the M2 license layout change. |
| Repository topics | Include relevant SuiteScript, NetSuite, ESLint, linting, and static analysis topics. | no access | Public GitHub API shows no topics yet. The available GitHub connector exposes repository reads but no repository metadata update tool, and `gh` is not available in the local shell. Recommended topics: `eslint`, `eslint-plugin`, `netsuite`, `suitescript`, `suitecloud`, `oracle-netsuite`, `javascript`, `static-analysis`, `linting`, `suitescript-2`. |
| Repository description | Concisely mention NetSuite, SuiteScript, ESLint, and unofficial compatibility checks. | no access | Current description is `Unofficial ESLint rules for source-backed SuiteScript compatibility checks`. The available GitHub connector exposes repository reads but no repository metadata update tool, and `gh` is not available in the local shell. Suggested description: `Unofficial ESLint rules for source-backed NetSuite SuiteScript compatibility checks.` |
| Repository homepage | Point to the package README or the most useful repository README section. | enabled | Public GitHub API reports `https://github.com/hannasdev/eslint-plugin-suitescript-compat#readme`; the root README now routes users to the package README and release/security docs. |
| Branch protection for `main` | Require pull requests and the `CI` workflow before merge. | deferred | Verify in GitHub repository settings. |
| Dependabot alerts | Enabled. | deferred | Verify in GitHub repository settings. |
| Dependabot security updates | Enabled where available. | deferred | Verify in GitHub repository settings. |
| GitHub private vulnerability reporting | Enabled and linked from `SECURITY.md`. | deferred | If unavailable, do not replace with public issue reporting for sensitive details. |
| Secret scanning | Enabled where available. | deferred | Verify in GitHub repository settings. |
| Push protection | Enabled where available. | deferred | Verify in GitHub repository settings. |
| Code scanning | Enable CodeQL or record a deliberate deferral. | deferred | Keep expectations realistic for a small JavaScript package. |
| Discussions | Leave disabled unless the maintainer explicitly wants a separate public Q&A/support surface. | left disabled | Public GitHub API reports Discussions disabled. No approval to enable Discussions during M3; issues remain the default public support path. |

Do not automate repository setting changes through API calls unless the
maintainer explicitly approves that operation.
