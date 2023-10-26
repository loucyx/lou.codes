<img id="logo" alt="@lou.codes/test" src="https://lou.codes/logos/lou_codes_test.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

✅ Equality test with enforced readability, based on the concept of
[RITEway][riteway] and inspired by [uvu][uvu].

## Usage

### 📦 Node

Install `@lou.codes/tests` as a dev dependency:

```bash
pnpm add -D @lou.codes/test
# or
npm install -D @lou.codes/test
# or
yarn add --dev @lou.codes/test
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
		"test": "NODE_OPTIONS='--import tsx' test"
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
		"test": "NODE_OPTIONS='--import tsx' c8 test"
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

Import `@lou.codes/test` using the `npm:` prefix, and use it directly:

```typescript
import { test } from "npm:@lou.codes/test";
import { add } from "../src/add.js";

test({
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
}).then(console.log);
```

### 🌎 Browser

Import `@lou.codes/test` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { test } from "https://esm.sh/@lou.codes/test";
	import { add } from "../src/add.js";

	test({
		given: "a 1 and a 2",
		must: "return 3",
		received: () => add(2)(1),
		wanted: () => 3,
	}).then(console.log);
</script>
```

## Writing tests

### TypeScript

```typescript
import type { Tests } from "@lou.codes/test";
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

/** @satisfies {import("@lou.codes/test").Tests<number>} */
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
import type { Test } from "@lou.codes/test";
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
import type { Test } from "@lou.codes/test";
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
import { test } from "@lou.codes/test";
import { customFormatter } from "./customFormatter.js";

test({
	given: "a 1 and a 2",
	must: "return 3",
	received: () => add(2)(1),
	wanted: () => 3,
}).then(customFormatter);
```

## Default output

`@lou.codes/tests` provides a default output for the tests. It looks like this:

```plaintext
[TEST] ./tests/example.test.ts
[FAIL] Given a 1 and a 2, must return 3, but...
	└ it has the wrong value. Wanted 3 but received 4.
```

And if the wanted/received type is more complex, like an object, then the output
goes into details about the error:

```plaintext
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
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/test/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[create-package]: https://lou.codes/libraries/lou_codes_create_package/
[documentation]: https://lou.codes/libraries/lou_codes_test/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/test.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/test.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Ftest%2Fpackage.json
[riteway]: https://github.com/ericelliott/riteway
[tsx]: https://npm.im/tsx
[uvu]: https://github.com/lukeed/uvu
