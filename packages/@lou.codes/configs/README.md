<img id="logo" alt="@lou.codes/configs" src="https://lou.codes/logos/lou_codes_configs.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

⚙️ Shared project configuration files for linting, formatting, documentation and
so on.

## Configurations

-   🦋 [changelog.cjs][changesets] — Changesets changelog functions.
-   🚨 [eslint.config.js][eslint] — JavaScript and TypeScript linting.
-   ✨ [prettier.config.js][prettier] — Code formatting.
-   🎨 [stylelint.config.cjs][stylelint] — CSS linting.
-   🏷️ [typescript.config.json][typescript] — TypeScript configuration (strict).
-   📖 [typedoc.config.json][typedoc] — Documentation configuration.

## Usage

All this configurations are setup automatically by
[@lou.codes/create-package][create-package] when creating a new package.

For manual setup of each file, follow the instructions below.

### `.changeset/config.json`

```json
{
	"$schema": "https://raw.githubusercontent.com/changesets/changesets/main/packages/config/schema.json",
	"changelog": "@lou.codes/configs/changelog.cjs",
	"commit": false,
	"access": "restricted",
	"baseBranch": "main",
	"updateInternalDependencies": "patch"
}
```

### `eslint.config.js`

```typescript
export { default } from "@lou.codes/configs/eslint.config.js";
```

### `prettier.config.js`

```typescript
export { default } from "@lou.codes/configs/prettier.config.js";
```

### `stylelint.config.cjs`

```typescript
module.exports = require("@lou.codes/configs/stylelint.config.cjs");
```

### `tsconfig.json`

```json
{
	"extends": "@lou.codes/configs/typescript.config.json"
}
```

### `typedoc.json`

```json
{
	"$schema": "https://typedoc.org/schema.json",
	"cname": "PUBLIC DOMAIN",
	"entryPoints": ["./lib"],
	"extends": ["@lou.codes/configs/typedoc.config.json"],
	"name": "PACKAGE NAME"
}
```

## Useful links

-   ⏳ [Changelog][changelog]: List of changes between versions.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/libraries/blob/main/packages/@lou.codes/configs/CHANGELOG.md
[changesets]: https://github.com/changesets/changesets
[create-package]: https://lou.codes/libraries/lou_codes_create_package/
[eslint]: https://eslint.org/docs/user-guide/configuring/
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/configs.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/configs.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/libraries.svg?labelColor=666&color=0a8
[prettier]: https://prettier.io/docs/en/options.html
[stylelint]: https://stylelint.io/user-guide/configure/
[typedoc]: https://typedoc.org/guides/options/
[typescript]: https://www.typescriptlang.org/tsconfig
