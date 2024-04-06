<img id="logo" alt="@lou.codes/prompts" src="https://lou.codes/logos/lou_codes_prompts.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

⁉️ CLI interactive prompts. Can be used to wrap anything that matches the
interface of `node:readline/promises`.

## Usage

### 📦 Node

Install `@lou.codes/prompts` as a dependency:

```bash
pnpm add @lou.codes/prompts
# or
npm install @lou.codes/prompts
# or
yarn add @lou.codes/prompts
```

Import it and use it:

```js
import { question } from "@lou.codes/prompts";
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

Import `@lou.codes/prompts` using the `npm:` prefix, and use it directly with
the native `prompt`:

```typescript
import { question } from "npm:@lou.codes/prompts";

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

Import `@lou.codes/prompts` using [esm.sh][esm.sh], and use it directly with the
native `prompt`:

```javascript
import { question } from "https://esm.sh/@lou.codes/prompts";

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
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/prompts/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[deno]: https://deno.land/
[documentation]: https://lou.codes/libraries/lou_codes_prompts/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/prompts.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/prompts.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Fprompts%2Fpackage.json
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
