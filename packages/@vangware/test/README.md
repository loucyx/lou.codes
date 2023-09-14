<img id="logo" alt="@vangware/test" src="./vangware__test.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

✅ Equality test with enforced readability, based on the concept of
[RITEway][riteway] and inspired by [uvu][uvu].

## Usage

### 📦 Node

Install `@vangware/tests` as a dev dependency:

```bash
pnpm add -D @vangware/test
# or
npm install -D @vangware/test
# or
yarn add --dev @vangware/test
```

Add a `test` script to `package.json`:

```json
{
	"scripts": {
		"test": "test"
	}
}
```

<details>
	<summary>Add TypeScript support</summary>

To support TypeScript, install [tsx][tsx] as a dev dependency:

```bash
pnpm add -D tsx
# or
npm install -D tsx
# or
yarn add --dev tsx
```

And update `package.json`:

```json
{
	"scripts": {
		"test": "NODE_OPTIONS='--loader tsx --no-warnings' test"
	}
}
```

</details>

<details>
	<summary>Add coverage</summary>

To add coverage, install `c8` as a dev dependency:

```bash
pnpm add -D c8
# or
npm install -D c8
# or
yarn add --dev c8
```

And update `package.json`:

```json
{
	"scripts": {
		"test": "c8 test"
	}
}
```

If you added TypeScript support, then update `package.json` like this instead:

And update `package.json`:

```json
{
	"scripts": {
		"test": "NODE_OPTIONS='--loader tsx --no-warnings' c8 test"
	}
}
```

</details>

Run tests:

```bash
pnpm test
# or
npm test
# or
yarn test
```

### 🦕 Deno

Import `@vangware/test` using the `npm:` prefix, and use it directly:

```typescript
import { test } from "npm:@vangware/test";
import { add } from "../src/add.js";

test({
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
}).then(console.log);
```

### 🌎 Browser

Import `@vangware/test` using [esm.sh][esm.sh], and use it directly:

```typescript
import { test } from "https://esm.sh/@vangware/test";
import { add } from "../src/add.js";

test({
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
}).then(console.log);
```

## Writing tests

### TypeScript

```typescript
import type { Tests } from "@vangware/test";
import { add } from "../src/add.js";

export default [
	{
		given: "a 1 and a 2",
		must: "return 3",
		received: () => add(2)(1),
		wanted: () => 3,
	},
	{
		given: "a 1 and a -2",
		must: "return -1",
		received: () => add(-2)(1),
		wanted: () => -1,
	},
] satisfies Tests<number>;
```

### JavaScript

```javascript
import { add } from "../src/add.js";

/** @satisfies {import("@vangware/test").Tests<number>} */
export default [
	{
		given: "a 1 and a 2",
		must: "return 3",
		received: () => add(2)(1),
		wanted: () => 3,
	},
	{
		given: "a 1 and a -2",
		must: "return -1",
		received: () => add(-2)(1),
		wanted: () => -1,
	},
];
```

### Other alternatives

Instead of exporting an `Array` of `Test` as `default`, the export can also be a
single `Test`:

```typescript
import type { Test } from "@vangware/test";
import { add } from "../src/add.js";

export default {
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
} satisfies Test<number>;
```

Or multiple exports with different tests:

```typescript
import type { Test } from "@vangware/test";
import { add } from "../src/add.js";

export const test1: Test<number> = {
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
};

export const test2: Test<number> = {
	given: "a 1 and a -2",
	must: "return -1",
	received: () => add(-2)(1),
	wanted: () => -1,
};
```

It can also be used directly without the `test` bin by importing the different
utils directly (like with the Deno and Browser examples above):

```typescript
import { test } from "@vangware/test";
import { customFormatter } from "./customFormatter.js";

test({
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
}).then(customFormatter);
```

## Default output

`@vangware/tests` provides a default output for the tests. It looks like this:

```text
[TEST] ./tests/example.test.ts
[FAIL] Given a 1 and a 2, must return 3, but...
	└ it has the wrong value. Wanted 3 but received 4.
```

And if the wanted/received type is more complex, like an object, then the output
goes into details about the error:

```text
[TEST] ./tests/example.test.ts
[FAIL] Given an object, must add a single property, but...
	├ foo.bar has the wrong value. Wanted 1 but received 2.
	├ foo.baz.1 is missing.
	└ bar was set with the value "bar".
```

But developers can choose to run `test` directly and use their own formatter, as
it was pointed out in the previous section.

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/test/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[create-package]:
	https://libraries.vangware.com/modules/_vangware_create_package.html
[documentation]: https://libraries.vangware.com/modules/_vangware_test.html
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/test.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/test.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[riteway]: https://github.com/ericelliott/riteway
[tsx]: https://npm.im/tsx
[uvu]: https://github.com/lukeed/uvu
