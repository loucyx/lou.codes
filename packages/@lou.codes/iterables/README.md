<img id="logo" alt="@lou.codes/iterables" src="https://lou.codes/logos/lou_codes_iterables.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🔁 Iterable and AsyncIterable utils.

## Usage

By default, all utils are meant to be used with `Iterable` values, to use
`AsyncIterable` values the functions have to be imported from
`@lou.codes/iterables/asynchronous`.

### 📦 Node

Install `@lou.codes/iterables` as a dependency:

```bash
pnpm add @lou.codes/iterables
# or
npm install @lou.codes/iterables
# or
yarn add @lou.codes/iterables
```

Import it and use it:

```typescript
import { iterableToArray, map } from "@lou.codes/iterables";

const mapDouble = map((value: number) => value * 2);

iterableToArray(mapDouble([1, 2, 3])); // [2, 4, 6]
```

### 🦕 Deno

Import `@lou.codes/iterables` using the `npm:` prefix, and use it directly:

```typescript
import { iterableToArray, map } from "npm:@lou.codes/iterables";

const mapDouble = map((value: number) => value * 2);

iterableToArray(mapDouble([1, 2, 3])); // [2, 4, 6]
```

### 🌎 Browser

Import `@lou.codes/iterables` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { iterableToArray, map } from "https://esm.sh/@lou.codes/iterables";

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
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/iterables/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/lou_codes_iterables/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/iterables.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/iterables.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Fiterables%2Fpackage.json
