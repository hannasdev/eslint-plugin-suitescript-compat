# Maintainer Security Checklist

This checklist records repository settings that are partly or fully managed in
GitHub rather than source control. Use these status values when updating the
table: `enabled`, `verified unavailable`, `no access`, or `deferred`.

| Setting | Desired State | Status | Notes |
| --- | --- | --- | --- |
| Branch protection for `main` | Require pull requests and the `CI` workflow before merge. | deferred | Verify in GitHub repository settings. |
| Dependabot alerts | Enabled. | deferred | Verify in GitHub repository settings. |
| Dependabot security updates | Enabled where available. | deferred | Verify in GitHub repository settings. |
| GitHub private vulnerability reporting | Enabled and linked from `SECURITY.md`. | deferred | If unavailable, do not replace with public issue reporting for sensitive details. |
| Secret scanning | Enabled where available. | deferred | Verify in GitHub repository settings. |
| Push protection | Enabled where available. | deferred | Verify in GitHub repository settings. |
| Code scanning | Enable CodeQL or record a deliberate deferral. | deferred | Keep expectations realistic for a small JavaScript package. |

Do not automate repository setting changes through API calls unless the
maintainer explicitly approves that operation.
