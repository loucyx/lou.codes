<img id="logo" alt="@vangware/types" src="https://vangware.com/logos/vangware_types.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge] ![Size][size-badge]

🏷️ Collection of [TypeScript][typescript] types shared across
[Vangware][vangware] projects.

## Usage

### 📦 Node

Install `@vangware/types` as a dependency:

```bash
pnpm add @vangware/types
# or
npm install @vangware/types
# or
yarn add @vangware/types
```

Import as type and use it:

```typescript
import type { Unary } from "@vangware/types";
```

### 🦕 Deno

Import `@vangware/types` using the `npm:` prefix, and use it directly:

```typescript
import type { Unary } from "npm:@vangware/types";
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/types/CHANGELOG.md
[documentation]: https://vangware.com/libraries/vangware_types/
[license-badge]:
	https://img.shields.io/npm/l/@vangware/types.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/types.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=Size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Fvangware%2Flibraries%2Fmain%2Fpackages%2F%40vangware%2Ftypes%2Fpackage.json
[typescript]: https://www.typescriptlang.org/
[vangware]: https://vangware.com
