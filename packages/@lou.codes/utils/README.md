<img id="logo" alt="@lou.codes/utils" src="https://lou.codes/logos/lou_codes_utils.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

⚒️ [Lou's][lou.codes] [TypeScript][typescript] [curried][currying]
[functional][functional-programming] utils.

## Usage

### 📦 Node

Install `@lou.codes/utils` as a dependency:

```bash
pnpm add @lou.codes/utils
# or
npm install @lou.codes/utils
# or
yarn add @lou.codes/utils
```

Import it and use it:

```typescript
import { get } from "@lou.codes/utils";

get("foo")({ foo: "bar" }); // "bar"
```

### 🦕 Deno

Import `@lou.codes/utils` using the `npm:` prefix, and use it directly:

```typescript
import { get } from "npm:@lou.codes/utils";

get("foo")({ foo: "bar" }); // "bar"
```

### 🌎 Browser

Import `@lou.codes/utils` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { get } from "https://esm.sh/@lou.codes/utils";

	get("foo")({ foo: "bar" }); // "bar"
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/utils/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[currying]: https://en.wikipedia.org/wiki/Currying
[documentation]: https://lou.codes/libraries/lou_codes_utils/
[esm.sh]: https://esm.sh
[functional-programming]: https://en.wikipedia.org/wiki/Functional_programming
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/utils.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/utils.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Futils%2Fpackage.json
[typescript]: https://typescriptlang.org/
[lou.codes]: https://lou.codes
