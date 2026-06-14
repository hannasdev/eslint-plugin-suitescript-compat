# Repository Trust And Discoverability Architecture Notes

## Context

This initiative does not change the ESLint plugin's rule architecture. It
changes the repository's public trust surface: security reporting, contribution
workflow, dependency maintenance, license signaling, discoverability metadata,
and GitHub settings.

The repository is an unofficial SuiteScript compatibility project. Public
governance and metadata must preserve that posture and avoid collecting or
publishing customer-specific NetSuite information.

## Current State

The repository currently has:

- a root README with a concise unofficial project description
- a contributing guide with source and privacy boundaries
- package-local MIT licensing
- root CC BY 4.0 prose licensing
- CI, release, and npm publish workflows
- source-linked rule docs and examples

Observed gaps from the planning review:

- no top-level security policy
- no code of conduct
- no issue or pull request templates
- no code owners file
- no Dependabot config
- no GitHub topics
- GitHub license detection reports `NOASSERTION` because the root license is not
  machine-recognized as the package's MIT license
- GitHub private vulnerability reporting is not yet documented as the intended
  private security channel
- repository security settings such as branch protection, secret scanning, and
  code scanning are not documented in source

## Target Shape

The repository should present as a small, careful, actively maintained open
source package:

- contribution paths are explicit and low-friction
- sensitive security reports have a clear private path
- routine dependency updates are automated
- licensing is understandable to humans and, where practical, GitHub/npm
  metadata consumers
- GitHub and npm search metadata use the terms potential users already search
  for
- security and branch-protection settings are documented even when they cannot
  be fully committed as files

## Decisions

| Decision | Rationale | Alternatives Considered |
| --- | --- | --- |
| Keep community health files short and original | The repository already values original, source-backed prose and avoiding copied vendor or policy text. | Copy full standard templates verbatim. |
| Add `SECURITY.md` before public support expansion | Security reporting needs a clear path before more users or contributors arrive. | Rely on public issues for all reports. |
| Use issue templates that warn against customer-specific data | NetSuite examples often include account IDs, script IDs, internal URLs, screenshots, or proprietary code. Templates should prevent accidental disclosure. | Generic issue templates without SuiteScript-specific safety warnings. |
| Add Dependabot for npm and GitHub Actions | The repo has a Node package and Actions workflows; both need routine update visibility. | Manual dependency review only. |
| Keep rule behavior out of scope | Trust and discoverability work should not blur into compatibility rule semantics. | Combine metadata changes with new lint rules. |
| Treat GitHub settings as a maintained checklist unless explicitly automated | Some settings require admin/API access and should be reviewed deliberately. | Attempt all settings changes through ad hoc API calls in the implementation PR. |
| Preserve package-local MIT licensing unless explicitly changed | The npm package is reusable code and already declares MIT. | Apply the root CC BY license to package code. |
| Use GitHub private vulnerability reporting for sensitive security reports | It gives reporters a private GitHub-native path without publishing a maintainer email address or encouraging sensitive public issues. | Public issues only, maintainer email address. |
| Use `@hannasdev` as the initial CODEOWNERS reviewer | The repository is currently maintained by a single owner, so CODEOWNERS should route review to that owner explicitly. | Leave CODEOWNERS out until more maintainers exist. |
| Target MIT in the root `LICENSE` during M2 and move prose licensing to `LICENSE-CC-BY-4.0.md` | This would give GitHub and users a standard machine-readable license signal while preserving CC BY 4.0 for repository prose/docs. | Keep root CC BY and accept `NOASSERTION`; use a license summary with multiple license files. |

## Contracts And Boundaries

- Community files own contribution, reporting, and review expectations.
- `CONTRIBUTING.md` continues to own source quality, factuality, and
  no-customer-data guidance.
- Package metadata owns npm discovery fields such as keywords, repository,
  homepage, license, and package files.
- README files own user-facing explanation and adoption flow.
- GitHub repository settings own branch protection, topics, security features,
  and support surfaces.
- The release workflows own publishing mechanics; metadata work should not alter
  release behavior unless validation reveals a concrete issue.

## Security Reporting Contract

`SECURITY.md` should:

- identify supported versions or state that only the current default branch and
  latest published package are supported
- ask reporters not to include secrets, account IDs, internal URLs, customer
  screenshots, or proprietary SuiteScript in public issues
- direct sensitive reports to GitHub private vulnerability reporting
- avoid guaranteed response SLAs unless the maintainer explicitly approves them
- explain that public issues are appropriate for non-sensitive bugs and rule
  requests

## Conduct Contract

`CODE_OF_CONDUCT.md` should be a short original conduct expectations file rather
than a lengthy copied policy template. It should name `@hannasdev` as the
maintainer responsible for enforcement and use normal GitHub moderation or
maintainer action for enforcement. It should not promise a separate private
conduct inbox unless the maintainer later provides one.

## Template Contract

Issue and PR templates should collect enough context to reproduce or review
without encouraging sensitive disclosure.

Bug/rule templates should prefer:

- plugin version or commit
- ESLint version
- Node version
- sanitized SuiteScript snippet
- expected versus actual diagnostic behavior
- source basis when proposing new Oracle-documented behavior

Templates should explicitly discourage:

- NetSuite account IDs
- customer script IDs
- internal URLs
- credentials, tokens, keys, or secrets
- screenshots containing customer data
- proprietary scripts copied wholesale

## License Signaling Contract

The project currently has two intended license domains:

- package code: MIT
- repository prose documentation: CC BY 4.0

The planned M2 source-controlled representation is:

- root `LICENSE`: MIT
- `LICENSE-CC-BY-4.0.md`: Creative Commons Attribution 4.0 International
  license text for prose documentation
- README/package docs: explicit boundary text explaining that package code is
  MIT and repository prose/docs are CC BY 4.0 unless otherwise stated

Until M2 changes the root license layout, the root `LICENSE` remains CC BY 4.0
and the package-local MIT license remains the package-code signal. The
package-local MIT license should remain present unless the owner explicitly
relicenses the package.

## GitHub Settings Contract

The following settings should be verified during or after implementation:

- repository is public
- issues are enabled
- wiki remains disabled unless needed
- merge commits remain disabled if the maintainer prefers a linear history
- branch protection requires the CI workflow before merging to `main`
- Dependabot alerts are enabled
- Dependabot security updates are enabled where available
- GitHub private vulnerability reporting is enabled and linked from
  `SECURITY.md`
- secret scanning is enabled where available
- push protection is enabled where available
- CodeQL or equivalent code scanning is enabled or intentionally deferred
- topics are set to relevant ecosystem terms
- repository description includes NetSuite, SuiteScript, and ESLint

If a setting cannot be changed during implementation, the maintainer checklist
should record the setting as `verified unavailable`, `no access`, or `deferred`
with a short reason.

## Discoverability Metadata

Recommended GitHub topics:

- `eslint`
- `eslint-plugin`
- `netsuite`
- `suitescript`
- `suitecloud`
- `oracle-netsuite`
- `javascript`
- `static-analysis`
- `linting`
- `suitescript-2`

Recommended npm keyword additions:

- `suitecloud`
- `oracle-netsuite`
- `netsuite-suitescript`
- `suitescript-2.0`
- `suitescript-2`
- `static-analysis`
- `linting`

Metadata should stay accurate and avoid keyword stuffing.

## Failure Modes

- GitHub still reports `NOASSERTION` after license cleanup: document whether the
  ambiguity is accepted or adjust the root license layout.
- Security policy creates unrealistic support expectations: revise to a
  maintainer-realistic process before publishing.
- GitHub private vulnerability reporting is unavailable for the repository:
  record the setting as `verified unavailable` or `deferred`, and do not invent
  a public fallback for sensitive reports without maintainer approval.
- Templates collect sensitive details: revise templates before enabling broader
  contributor outreach.
- Dependabot creates noisy update PRs: tune schedule, grouping, or open PR limit.
- Code scanning produces irrelevant alerts: document intentional deferral or
  tune configuration.

## Validation

- `npm test`
- `npm pack --dry-run --workspace eslint-plugin-suitescript-compat`
- GitHub community profile review
- GitHub repository metadata/topics review
- GitHub security and branch protection settings review
- Manual docs review for unofficial Oracle/NetSuite posture and no sensitive
  data requests

## Open Questions

- [ ] Should Discussions remain disabled, or should the repository offer a
  separate Q&A/support surface?
- [ ] Should CodeQL be enabled immediately for this small JavaScript package or
  deferred until the project has more external contribution volume?
