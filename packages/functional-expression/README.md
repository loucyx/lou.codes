<img id="logo" alt="functional-expression by loucyx" src="https://lou.codes/logos/functional_expression.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🧙 Functional Regular expression builder.

## Usage

### 📦 Node

Install `functional-expression` as a dependency:

```bash
pnpm add functional-expression
# or
npm install functional-expression
# or
yarn add functional-expression
```

Import it and use it:

```typescript
import { group, or } from "functional-expression";

group(or("this", "that")); // "(?:this|that)"
```

### 🦕 Deno

Import `functional-expression` using the `npm:` prefix, and use it directly:

```typescript
import { group, or } from "npm:functional-expression";

group(or("this", "that")); // "(?:this|that)"
```

### 🌎 Browser

Import `functional-expression` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { group, or } from "https://esm.sh/functional-expression";

	group(or("this", "that")); // "(?:this|that)"
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/functional-expression/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/functional_expression/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/functional-expression.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/functional-expression.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2Ffunctional-expression%2Fpackage.json
[lou.codes]: https://lou.codes
