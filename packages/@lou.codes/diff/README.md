<img id="logo" alt="@lou.codes/diff" src="https://lou.codes/logos/lou_codes_diff.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

↔️ Deep diffing utility.

## Usage

### 📦 Node

Install `@lou.codes/diff` as a dependency:

```bash
pnpm add @lou.codes/diff
# or
npm install @lou.codes/diff
# or
yarn add @lou.codes/diff
```

Import it and use it:

```typescript
import { compare } from "@lou.codes/diff";

compare({ left: "Lou", right: "Nope" }); // [{ kind: 4, left: "Lou", right: "Nope", path: [] }]
```

### 🦕 Deno

Import `@lou.codes/diff` using the `npm:` prefix, and use it directly:

```typescript
import { compare } from "npm:@lou.codes/diff";

compare({ left: "Lou", right: "Nope" }); // [{ kind: 4, left: "Lou", right: "Nope", path: [] }]
```

### 🌎 Browser

Import `@lou.codes/diff` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { compare } from "https://esm.sh/@lou.codes/diff";

	compare({ left: "Lou", right: "Nope" }); // [{ kind: 4, left: "Lou", right: "Nope", path: [] }]
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/diff/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/lou_codes_diff/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/diff.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/diff.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Fdiff%2Fpackage.json
[lou.codes]: https://lou.codes
