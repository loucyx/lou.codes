<img id="logo" alt="@vangware/ansi" src="./vangware__ansi.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

📟 Functional CLI ANSI formatting functions.

## Usage

### 📦 Node

Install `@vangware/ansi` as a dependency:

```bash
pnpm add @vangware/ansi
# or
npm install @vangware/ansi
# or
yarn add @vangware/ansi
```

Import it and use it:

```typescript
import { foregroundRed } from "@vangware/ansi";

foregroundRed`Hello world!`; // "Hello world!" in red text.
```

### 🦕 Deno

Import `@vangware/ansi` using the `npm:` prefix, and use it directly:

```typescript
import { foregroundRed } from "npm:@vangware/ansi";

foregroundRed`Hello world!`; // "Hello world!" in red text.
```

### 🌎 Browser

Import `@vangware/ansi` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { foregroundRed } from "https://esm.sh/@vangware/ansi";

	foregroundRed`Hello world!`; // "Hello world!" in red text.
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/ansi/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://libraries.vangware.com/modules/_vangware_ansi.html
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
