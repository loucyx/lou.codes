<img id="logo" alt="@lou.codes/constants" src="https://lou.codes/logos/lou_codes_constants.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge] ![Size][size-badge]

🔢 Shared constants.

## Usage

### 📦 Node

Install `@lou.codes/constants` as a dependency:

```bash
pnpm add @lou.codes/constants
# or
npm install @lou.codes/constants
# or
yarn add @lou.codes/constants
```

Import it and use it:

```typescript
import { EMPTY_OBJECT } from "@lou.codes/constants";

console.log(EMPTY_OBJECT); // {}
```

### 🦕 Deno

Import `@lou.codes/constants` using the `npm:` prefix, and use it directly:

```typescript
import { EMPTY_OBJECT } from "npm:@lou.codes/constants";

console.log(EMPTY_OBJECT); // {}
```

### 🌎 Browser

Import `@lou.codes/constants` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { EMPTY_OBJECT } from "https://esm.sh/@lou.codes/constants";

	console.log(EMPTY_OBJECT); // {}
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@loucyx/@lou.codes/constants/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/lou.codes_constants/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/constants.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/constants.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%loucyx%2Flou.codes%2Fmain%2Fpackages%2F@lou.codes/constants%2Fpackage.json
[lou.codes]: https://lou.codes
