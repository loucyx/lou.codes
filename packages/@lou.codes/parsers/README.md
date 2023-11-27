<img id="logo" alt="@lou.codes/parsers" src="https://lou.codes/logos/lou_codes_parsers.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

👁️‍🗨️ Parsers without nonsense.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe](https://lou.codes/libraries/lou_codes_types/#maybe) type).

## Usage

### 📦 Node

Install `@lou.codes/parsers` as a dependency:

```bash
pnpm add @lou.codes/parsers
# or
npm install @lou.codes/parsers
# or
yarn add @lou.codes/parsers
```

Import it and use it:

```typescript
import { parseDecimal } from "@lou.codes/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🦕 Deno

Import `@lou.codes/parsers` using the `npm:` prefix, and use it directly:

```typescript
import { parseDecimal } from "npm:@lou.codes/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🌎 Browser

Import `@lou.codes/parsers` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { parseDecimal } from "https://esm.sh/@lou.codes/parsers";

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
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/PARSERS/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/lou_codes_parsers/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/parsers.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/parsers.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=brotli&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Fparsers%2Fpackage.json
