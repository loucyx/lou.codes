<img id="logo" alt="@vangware/prompts" src="https://vangware.com/logos/vangware_prompts.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

⁉️ CLI interactive prompts. Can be used to wrap anything that matches the
interface of `node:readline/promises`.

## Usage

### 📦 Node

Install `@vangware/prompts` as a dependency:

```bash
pnpm add @vangware/prompts
# or
npm install @vangware/prompts
# or
yarn add @vangware/prompts
```

Import it and use it:

```js
import { question } from "@vangware/prompts";
import { createInterface } from "node:readline/promises";

const exampleQuestion = question(
	createInterface({
		input: process.stdin,
		output: process.stdout,
	}),
);

exampleQuestion({
	format: value => parseInt(value, 18),
	query: "How old are you?",
	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
})
	.then(console.log)
	.catch(console.error)
	.finally(() => readlineInterface.close());
```

### 🦕 Deno

Import `@vangware/prompts` using the `npm:` prefix, and use it directly with the
native `prompt`:

```typescript
import { question } from "npm:@vangware/prompts";

const exampleQuestion = question({
	question: query => Promise.resolve(prompt(query)),
});

exampleQuestion({
	format: value => parseInt(value, 18),
	query: "How old are you?",
	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
})
	.then(console.log)
	.catch(console.error);
```

### 🌎 Browser

Import `@vangware/prompts` using [esm.sh][esm.sh], and use it directly with the
native `prompt`:

```javascript
import { question } from "https://esm.sh/@vangware/prompts";

const exampleQuestion = question({
	question: query => Promise.resolve(prompt(query)),
});

exampleQuestion({
	format: value => parseInt(value, 18),
	query: "How old are you?",
	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
})
	.then(console.log)
	.catch(console.error);
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/prompts/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[deno]: https://deno.land/
[documentation]: https://vangware.com/libraries/vangware_prompts/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/prompts.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/prompts.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Fvangware%2Flibraries%2Fmain%2Fpackages%2F%40vangware%2Fprompts%2Fpackage.json
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
