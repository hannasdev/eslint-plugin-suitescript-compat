# Repository Trust And Discoverability Milestones

## M1: Community Health And Security Baseline

### Outcome

Add the source-controlled files that make contribution, security reporting, and
maintenance expectations clear for a public open source repository.

### Scope

- Add `SECURITY.md` with realistic vulnerability reporting guidance.
- Add `CODE_OF_CONDUCT.md` as a short original conduct expectations file.
- Add issue templates for bug reports, rule requests, and documentation/source
  review concerns.
- Add `.github/pull_request_template.md`.
- Add `.github/CODEOWNERS` with `@hannasdev` as the default reviewer.
- Add `.github/dependabot.yml` for npm and GitHub Actions.
- Add a short maintainer checklist for non-source-controlled security settings.

### Scope Budget

- Primary behavior change: contributors and reporters get clear, safe channels
  and dependency maintenance begins.
- Major subsystem boundaries touched: GitHub community files, dependency
  maintenance config.
- Acceptance criteria count: 6.
- Estimated non-generated diff size: under 800 changed lines.
- Validation shape: docs review plus CI/package checks.
- Split rationale: this is the smallest trust-building vertical slice and does
  not require changing package behavior.

### Non-Goals

- Do not change lint rule implementation.
- Do not change npm package publishing behavior.
- Do not enable or configure repository settings through an API unless
  explicitly approved during implementation.
- Do not ask issue reporters to include customer-specific account data,
  screenshots, internal URLs, credentials, or proprietary scripts.

### Acceptance Criteria

- [ ] `SECURITY.md` tells users how to report vulnerabilities without posting
  sensitive details publicly, using GitHub private vulnerability reporting.
- [ ] Issue and PR templates ask for useful reproduction/source context while
  warning against customer-specific or secret material.
- [ ] `CODEOWNERS` identifies default reviewers for repository and package
  changes, with `@hannasdev` as the initial owner.
- [ ] Dependabot is configured for root npm dependencies and GitHub Actions.
- [ ] A maintainer checklist records recommended GitHub security settings:
  branch protection, Dependabot alerts/security updates, GitHub private
  vulnerability reporting, secret scanning, push protection, and code scanning.
- [ ] The code of conduct names `@hannasdev` as maintainer for enforcement and
  uses GitHub moderation/project-maintainer action rather than promising a
  separate private conduct inbox.

### Required Validation

- `npm test`
- Manual: review generated GitHub community profile after merge.
- Manual: confirm templates preserve the repository's unofficial Oracle/NetSuite
  posture.

### Risks / Watchpoints

- Keep security response language realistic for a small maintainer-owned
  project.
- Avoid copying lengthy third-party policy text when a shorter original policy
  is enough.
- Make sure templates do not encourage disclosure of NetSuite account IDs,
  customer script IDs, internal URLs, or private implementation details.
- Do not use the security report path for ordinary support, rule requests, or
  public conduct discussions.

### Status

- [x] Planned
- [x] Implemented
- [x] Conformance reviewed
- [ ] Adversarially reviewed
- [ ] PR opened
- [ ] Merged

### Implementation Evidence

- Added community health and security baseline files for M1.
- YAML validation passed for Dependabot and issue template files.
- The local shell does not have `npm` or `node` on `PATH`, and the bundled Node
  runtime includes `node` but not `npm`. As an explicit local substitute for
  `npm test`, the underlying repository and workspace Node test suites passed
  with bundled Node 24.14.0:
  - `/Users/hanna/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test "tests/**/*.test.mjs"`
  - `/Users/hanna/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test "packages/eslint-plugin-suitescript-compat/tests/**/*.test.js"`
- First conformance review result: Partial due to exact `npm test` unavailability
  and bookkeeping gaps; bookkeeping was updated after that review.

## M2: License And Public README Credibility

### Outcome

Make the repository's public landing page and license boundary clearer for
users, contributors, GitHub, and npm consumers.

### Scope

- Update root README first-screen copy with concise package value, status, and
  unofficial Oracle/NetSuite posture.
- Add minimal badges for CI, npm package, and license.
- Clarify package code versus repository prose documentation licensing.
- Change the root license layout so GitHub and users can identify MIT package
  code without ambiguity: make root `LICENSE` MIT, move CC BY 4.0 prose
  licensing to `LICENSE-CC-BY-4.0.md`, and document that docs/prose remain CC
  BY unless otherwise stated.
- Add or update changelog/release-note guidance if needed to support public
  credibility.

### Scope Budget

- Primary behavior change: first-time visitors can quickly understand what the
  project is, whether CI passes, what license applies, and what the package
  does.
- Major subsystem boundaries touched: root docs, license files/docs, package
  metadata if needed.
- Acceptance criteria count: 6.
- Estimated non-generated diff size: under 800 changed lines.
- Validation shape: docs review plus package metadata/package-contents check.
- Split rationale: license and README changes are tightly coupled because the
  README must explain the chosen license boundary.

### Non-Goals

- Do not relicense existing content without owner approval.
- Do not add a documentation site.
- Do not add new rule docs or behavior changes.
- Do not claim official certification, endorsement, or compatibility guarantees.

### Acceptance Criteria

- [ ] Root README explains the package value and limitations within the first
  screen.
- [ ] README badges are useful and limited to signals users actually need.
- [ ] License boundary text clearly distinguishes MIT package code from CC BY
  prose documentation.
- [ ] Root `LICENSE` contains the MIT license, CC BY 4.0 is preserved in
  `LICENSE-CC-BY-4.0.md`, and README/package docs describe the boundary.
- [ ] Package metadata remains consistent with the chosen license boundary.
- [ ] Release or changelog guidance is discoverable for users evaluating project
  maturity.

### Required Validation

- `npm test`
- `npm pack --dry-run --workspace eslint-plugin-suitescript-compat`
- Manual: inspect GitHub license/community profile output after merge.
- Manual: review README for concise, source-backed, unofficial wording.

### Risks / Watchpoints

- GitHub license detection may still report `NOASSERTION` if multiple license
  files remain ambiguous. Record the chosen tradeoff if that is acceptable.
- Badges should not push the actual package explanation below useful first-screen
  content.
- Any license-boundary change should preserve the package-local MIT license
  unless explicitly superseded.

### Status

- [x] Planned
- [ ] Implemented
- [ ] Conformance reviewed
- [ ] Adversarially reviewed
- [ ] PR opened
- [ ] Merged

## M3: Discoverability Metadata And Repository Settings

### Outcome

Improve GitHub and npm discoverability, then verify externally visible settings
that cannot be fully represented in source files.

### Scope

- Update package keywords for SuiteScript, NetSuite, ESLint, linting, and static
  analysis search terms.
- Update GitHub repository topics.
- Update GitHub repository description to include SuiteScript, NetSuite, and
  ESLint in one concise phrase.
- Verify repository homepage points to the most useful README.
- Verify branch protection requires CI before merge.
- Verify Dependabot alerts/security updates, secret scanning, push protection,
  and code scanning settings.
- If a repository setting cannot be changed during implementation, update the
  maintainer checklist with `verified unavailable`, `no access`, or `deferred`
  instead of treating the milestone as failed.
- Optionally enable Discussions only if the maintainer wants a public support
  surface distinct from issues.

### Scope Budget

- Primary behavior change: users can find the repository through GitHub/npm
  search and see stronger repository setting signals.
- Major subsystem boundaries touched: package metadata, GitHub repository
  settings.
- Acceptance criteria count: 7.
- Estimated non-generated diff size: under 300 changed lines, plus external
  settings.
- Validation shape: metadata review and GitHub settings checklist.
- Split rationale: external settings are operationally distinct from community
  file creation and should be reviewed after the baseline docs exist.

### Non-Goals

- Do not create a GitHub Pages site in this milestone.
- Do not enable Discussions unless the maintainer explicitly wants the support
  load.
- Do not change release automation unless a metadata validation issue requires
  it.
- Do not publish a new npm version solely to test search keywords unless the
  maintainer approves a release.

### Acceptance Criteria

- [ ] Package keywords include relevant ecosystem search terms without keyword
  stuffing.
- [ ] GitHub topics include relevant SuiteScript, NetSuite, ESLint, linting, and
  static analysis terms.
- [ ] GitHub description concisely communicates the package and unofficial
  compatibility-check purpose.
- [ ] Branch protection and required CI settings are verified or documented as
  intentionally deferred.
- [ ] GitHub security features are verified or documented as unavailable/
  intentionally deferred.
- [ ] Any setting that cannot be changed is recorded in the maintainer checklist
  with `verified unavailable`, `no access`, or `deferred`.
- [ ] Optional support surfaces such as Discussions are explicitly accepted or
  left disabled.

### Required Validation

- `npm test`
- `npm pack --dry-run --workspace eslint-plugin-suitescript-compat`
- Manual: inspect GitHub repo metadata and topics.
- Manual: inspect npm package metadata after the next approved publish.

### Risks / Watchpoints

- GitHub setting changes may require admin access and should be made
  deliberately.
- npm keyword changes only affect registry search after a publish.
- Public support surfaces can create maintenance expectations; keep issues as
  the default support path unless there is a reason to split discussions.

### Status

- [x] Planned
- [ ] Implemented
- [ ] Conformance reviewed
- [ ] Adversarially reviewed
- [ ] PR opened
- [ ] Merged
