<img id="logo" alt="@lou.codes/math by loucyx" src="https://lou.codes/logos/lou_codes_math.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🧮 Precise basic math operations. Using this library, adding `0.1` to `0.2` will
give you `0.3`, which might sound like nothing, but that's not the [default
behavior of JavaScript][floating-point].

## Usage

### 📦 Node

Install `@lou.codes/math` as a dependency:

```bash
pnpm add @lou.codes/math
# or
npm install @lou.codes/math
# or
yarn add @lou.codes/math
```

Import it and use it:

```typescript
import { chain } from "@lou.codes/math";

chain(0.2).add(0.1); // 0.3 🪄
```

### 🦕 Deno

Import `@lou.codes/math` using the `npm:` prefix, and use it directly:

```typescript
import { chain } from "npm:@lou.codes/math";

chain(0.2).add(0.1); // 0.3 🪄
```

### 🌎 Browser

Import `@lou.codes/math` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { chain } from "https://esm.sh/@lou.codes/math";

	chain(0.2).add(0.1); // 0.3 🪄
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@loucyx/@lou.codes/math/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/lou_codes_math/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/math.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/math.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Bundle+Size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F@lou.codes/math%2Fpackage.json
[lou.codes]: https://lou.codes
[floating-point]: https://0.30000000000000004.com/
