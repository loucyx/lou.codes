<img id="logo" alt="@vangware/diff" src="https://vangware.com/logos/vangware_diff.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

↔️ Deep diffing utility.

## Usage

### 📦 Node

Install `@vangware/diff` as a dependency:

```bash
pnpm add @vangware/diff
# or
npm install @vangware/diff
# or
yarn add @vangware/diff
```

Import it and use it:

```typescript
import { compare } from "@vangware/diff";

compare({ left: "Vangware", right: "Nope" }); // [{ kind: "UPDATE", left: "Vangware", right: "Nope", path: [] }]
```

### 🦕 Deno

Import `@vangware/diff` using the `npm:` prefix, and use it directly:

```typescript
import { compare } from "npm:@vangware/diff";

compare({ left: "Vangware", right: "Nope" }); // [{ kind: "UPDATE", left: "Vangware", right: "Nope", path: [] }]
```

### 🌎 Browser

Import `@vangware/diff` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { compare } from "https://esm.sh/@vangware/diff";

	compare({ left: "Vangware", right: "Nope" }); // [{ kind: "UPDATE", left: "Vangware", right: "Nope", path: [] }]
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/vangware/diff/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://vangware.com/libraries/vangware_diff.html
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/diff.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/diff.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Fvangware%2Flibraries%2Fmain%2Fpackages%2F@vangware/diff%2Fpackage.json
[vangware]: https://vangware.com
