<img id="logo" alt="@vangware/parsers" src="https://vangware.com/logos/vangware_parsers.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

👁️‍🗨️ Parsers without nonsense.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe](https://vangware.com/libraries/vangware_types/#maybe) type).

## Usage

### 📦 Node

Install `@vangware/parsers` as a dependency:

```bash
pnpm add @vangware/parsers
# or
npm install @vangware/parsers
# or
yarn add @vangware/parsers
```

Import it and use it:

```typescript
import { parseDecimal } from "@vangware/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🦕 Deno

Import `@vangware/parsers` using the `npm:` prefix, and use it directly:

```typescript
import { parseDecimal } from "npm:@vangware/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🌎 Browser

Import `@vangware/parsers` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { parseDecimal } from "https://esm.sh/@vangware/parsers";

	parseDecimal("101"); // 101
	parseDecimal("nope"); // undefined
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/PARSERS/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://vangware.com/libraries/vangware_parsers/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=Size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Fvangware%2Flibraries%2Fmain%2Fpackages%2F%40vangware%2Fparsers%2Fpackage.json
