# SuiteScript ESLint Playgrounds

These playgrounds are small installable projects for checking plugin behavior as
it would appear in a real repository or IDE.

## `compat-only`

Installs only `eslint-plugin-suitescript-compat` from the local package path.
Use this playground to see compatibility diagnostics in isolation.

```sh
cd packages/eslint-plugin-suitescript-compat/playgrounds/compat-only
npm install
npm run lint
```

## `compat-plus-suitescript`

Installs both `eslint-plugin-suitescript-compat` and the community
`eslint-plugin-suitescript` package. Use this playground to compare our
compatibility diagnostics with the broader SuiteScript linting rules.

```sh
cd packages/eslint-plugin-suitescript-compat/playgrounds/compat-plus-suitescript
npm install
npm run lint
```

Both lint commands are expected to fail because the files intentionally contain
diagnostics. The two playgrounds use matching `SuiteScripts/` files so IDE
diagnostics can be compared side by side.
