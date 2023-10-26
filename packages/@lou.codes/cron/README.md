<img id="logo" alt="@lou.codes/cron" src="https://lou.codes/logos/lou_codes_cron.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

⏲️ Cron Quartz and Cron UNIX expression parser.

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
import { parseStringQuartz, parseCronQuartz } from "@lou.codes/cron";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
	{
		seconds: { every: 3, start: { from: 1, to: 2 } },
		minutes: [{ from: 1, to: 2 }, 3, 4],
		hours: "*",
		dayOfMonth: { nearest: 2 },
		month: ["SEP", "OCT"],
		dayOfWeek: { last: 1 },
		year: { every: 10, start: "*" }
	}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

### 🦕 Deno

Import `@lou.codes/cron` using the `npm:` prefix, and use it directly:

```typescript
import { parseStringQuartz, parseCronQuartz } from "npm:@lou.codes/cron";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
	{
		seconds: { every: 3, start: { from: 1, to: 2 } },
		minutes: [{ from: 1, to: 2 }, 3, 4],
		hours: "*",
		dayOfMonth: { nearest: 2 },
		month: ["SEP", "OCT"],
		dayOfWeek: { last: 1 },
		year: { every: 10, start: "*" }
	}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

### 🌎 Browser

Import `@lou.codes/cron` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import {
		parseStringQuartz,
		parseCronQuartz,
	} from "https://esm.sh/@lou.codes/cron";

	const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
	/*
		{
			seconds: { every: 3, start: { from: 1, to: 2 } },
			minutes: [{ from: 1, to: 2 }, 3, 4],
			hours: "*",
			dayOfMonth: { nearest: 2 },
			month: ["SEP", "OCT"],
			dayOfWeek: { last: 1 },
			year: { every: 10, start: "*" }
		}
	*/

	parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

## To do

A **big** change is coming with stricter types and a better DX. Stay tuned.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/libraries/blob/main/packages/@lou.codes/cron/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/libraries.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/cron
[documentation]: https://lou.codes/libraries/lou_codes_cron/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/cron.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/cron.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/libraries.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flibraries%2Fmain%2Fpackages%2F%40lou.codes%2Fcron%2Fpackage.json
