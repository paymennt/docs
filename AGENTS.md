# Project Overview
This workspace contains the Paymennt documentation site located in `pmnt-docs/`.
The site is built with Docusaurus (v3.9.2) and uses the classic preset.

## Key Paths
- `pmnt-docs/docusaurus.config.js`: Main site configuration.
- `pmnt-docs/src/css/custom.css`: Global theme overrides and custom styles.
- `pmnt-docs/static/openapi/paymennt.yaml`: OpenAPI spec used by the API reference (served at `/openapi/paymennt.yaml`).

## Dev Commands
- Start dev server: `yarn --cwd pmnt-docs start` (or `npm --prefix pmnt-docs run start`).

## API Reference
- Scalar API Reference is enabled via `@scalar/docusaurus` and served at `/api`.
- Configuration is in `pmnt-docs/docusaurus.config.js` under the `@scalar/docusaurus` plugin.

## Work Done So Far
- Upgraded Docusaurus to the latest version in use (`^3.9.2`).
- Replaced Redoc/Redocusaurus with Scalar for the API reference (see `@scalar/docusaurus` plugin config).
