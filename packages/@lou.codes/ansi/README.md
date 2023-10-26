<img id="logo" alt="@lou.codes/ansi" src="https://lou.codes/logos/lou_codes_ansi.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

📟 Functional CLI ANSI formatting functions.

## Usage

### 📦 Node

Install `@lou.codes/ansi` as a dependency:

```bash
pnpm add @lou.codes/ansi
# or
npm install @lou.codes/ansi
# or
yarn add @lou.codes/ansi
```

Import it and use it:

```typescript
import { foregroundRed } from "@lou.codes/ansi";

foregroundRed`Hello world!`; // "Hello world!" in red text.
```

### 🦕 Deno

Import `@lou.codes/ansi` using the `npm:` prefix, and use it directly:

```typescript
import { foregroundRed } from "npm:@lou.codes/ansi";

foregroundRed`Hello world!`; // "Hello world!" in red text.
```

### 🌎 Browser

Import `@lou.codes/ansi` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { foregroundRed } from "https://esm.sh/@lou.codes/ansi";

	foregroundRed`Hello world!`; // "Hello world!" in red text.
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/libraries/blob/main/packages/@lou.codes/ansi/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/libraries.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/libraries
[documentation]: https://lou.codes/libraries/lou_codes_ansi/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/ansi.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/ansi.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/libraries.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flibraries%2Fmain%2Fpackages%2F%40lou.codes%2Fansi%2Fpackage.json
