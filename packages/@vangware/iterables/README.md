<img id="logo" alt="@vangware/iterables" src="https://vangware.com/logos/vangware_iterables.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🔁 Iterable and AsyncIterable utils.

## Usage

### 📦 Node

Install `@vangware/iterables` as a dependency:

```bash
pnpm add @vangware/iterables
# or
npm install @vangware/iterables
# or
yarn add @vangware/iterables
```

Import it and use it:

```typescript
import { iterableToArray, map } from "@vangware/iterables";

const mapDouble = map((value: number) => value * 2);

iterableToArray(mapDouble([1, 2, 3])); // [2, 4, 6]
```

### 🦕 Deno

Import `@vangware/iterables` using the `npm:` prefix, and use it directly:

```typescript
import { iterableToArray, map } from "npm:@vangware/iterables";

const mapDouble = map((value: number) => value * 2);

iterableToArray(mapDouble([1, 2, 3])); // [2, 4, 6]
```

### 🌎 Browser

Import `@vangware/iterables` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { iterableToArray, map } from "https://esm.sh/@vangware/iterables";

	const mapDouble = map(value => value * 2);

	iterableToArray(mapDouble([1, 2, 3])); // [2, 4, 6]
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/iterables/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://vangware.com/libraries/vangware_iterables/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/iterables.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/iterables.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=Size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Fvangware%2Flibraries%2Fmain%2Fpackages%2F%40vangware%2Fiterables%2Fpackage.json
