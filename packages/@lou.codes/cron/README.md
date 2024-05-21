<img id="logo" alt="@lou.codes/cron" src="https://lou.codes/logos/lou_codes_cron.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

⏲️ Standard cron expression tools.

## Usage

### 📦 Node

Install `@lou.codes/cron` as a dependency:

```bash
pnpm add @lou.codes/cron
# or
npm install @lou.codes/cron
# or
yarn add @lou.codes/cron
```

Import it and use it:

```typescript
import { parse, stringify } from "@lou.codes/cron";

const cron = parse("1-2,3,4 * 2 8,9 1");
/*
	{
		minutes: [{ from: 1, to: 2 }, 3, 4],
		hours: "*",
		dayOfMonth: 2,
		month: [8, 9],
		dayOfWeek: 1
	}
*/

stringify(cron); // "1-2,3,4 * 2 8,9 1"

// Also works with partials:
stringify({ hours: 13 }); // "* 13 * * *"

// Only parses with valid dates:
parse("* * 31 2 *"); // undefined because 2/31 is invalid
```

### 🦕 Deno

Import `@lou.codes/cron` using the `npm:` prefix, and use it directly:

```typescript
import { parse, stringify } from "@lou.codes/cron";

const cron = parse("1-2,3,4 * 2 8,9 1");
/*
	{
		minutes: [{ from: 1, to: 2 }, 3, 4],
		hours: "*",
		dayOfMonth: 2,
		month: [8, 9],
		dayOfWeek: 1
	}
*/

stringify(cron); // "1-2,3,4 * 2 8,9 1"

// Also works with partials:
stringify({ hours: 13 }); // "* 13 * * *"

// Only parses with valid dates:
parse("* * 31 2 *"); // undefined because 2/31 is invalid
```

### 🌎 Browser

Import `@lou.codes/cron` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { parse, stringify } from "https://esm.sh/@lou.codes/cron";

	const cron = parse("1-2,3,4 * 2 8,9 1");
	/*
	{
		minutes: [{ from: 1, to: 2 }, 3, 4],
		hours: "*",
		dayOfMonth: 2,
		month: [8, 9],
		dayOfWeek: 1
	}
*/

	stringify(cron); // "1-2,3,4 * 2 8,9 1"

	// Also works with partials:
	stringify({ hours: 13 }); // "* 13 * * *"

	// Only parses with valid dates:
	parse("* * 31 2 *"); // undefined because 2/31 is invalid
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

## To do

Soon a human readable parser will be added, so we can do stuff like:

```typescript
readable("* * * * *"); // "Every minute"
readable("5 * * * *"); // "Minute 5 of every hour"
readable("* 5 * * *"); // "Every minute at 5 AM"
readable("* * 5 * *"); // "Every minute at the 5th day of every month"
readable("* * * 5 *"); // "Every minute in May"
readable("* * * * 5"); // "Every minute on Friday"
readable("5 5 5 5 5"); // "At 5:05 AM, the 5th day of May on Friday"
```

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/@lou.codes/cron/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/cron
[documentation]: https://lou.codes/libraries/lou_codes_cron/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/cron.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/cron.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Size+(min%2Bbrotli)&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F%40lou.codes%2Fcron%2Fpackage.json
