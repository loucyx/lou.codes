<img id="logo" alt="@lou.codes/types" src="https://lou.codes/logos/lou_codes_types.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge] ![Size][size-badge]

🏷️ Collection of [TypeScript][typescript] types shared across [Lou
Codes][lou.codes] projects.

## Usage

### 📦 Node

Install `@lou.codes/types` as a dependency:

```bash
pnpm add @lou.codes/types
# or
npm install @lou.codes/types
# or
yarn add @lou.codes/types
```

Import as type and use it:

```typescript
import type { Unary } from "@lou.codes/types";
```

### 🦕 Deno

Import `@lou.codes/types` using the `npm:` prefix, and use it directly:

```typescript
import type { Unary } from "npm:@lou.codes/types";
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/types/CHANGELOG.md
[documentation]: https://lou.codes/libraries/lou_codes_types/
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/types.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/types.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Ftypes%2Fpackage.json
[typescript]: https://www.typescriptlang.org/
[lou.codes]: https://lou.codes
