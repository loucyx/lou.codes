<img alt="@lou.codes/predicates" id="logo" src="https://lou.codes/logos/lou_codes_predicates.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🧐 Predicate util functions

## Usage

### 📦 Node

Install `@lou.codes/predicates` as a dependency:

```bash
pnpm add @lou.codes/predicates
# or
npm install @lou.codes/predicates
# or
yarn add @lou.codes/predicates
```

Import it and use it:

```typescript
import { isBoolean } from "@lou.codes/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

### 🦕 Deno

Import `@lou.codes/predicates` using the `npm:` prefix, and use it directly:

```typescript
import { isBoolean } from "npm:@lou.codes/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

### 🌎 Browser

Import `@lou.codes/predicates` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { isBoolean } from "https://esm.sh/@lou.codes/predicates";

	isBoolean(true); // true
	isBoolean(false); // true
	isBoolean(undefined); // false
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/predicates/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/lou_codes_predicates/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/predicates.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/predicates.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Fpredicates%2Fpackage.json
