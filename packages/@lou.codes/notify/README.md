<img id="logo" alt="@lou.codes/notify" src="https://lou.codes/logos/lou_codes_notify.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

📣 Minimalistic Pub/Sub implementation.

## Usage

### 📦 Node

Install `@lou.codes/notify` as a dependency:

```bash
pnpm add @lou.codes/notify
# or
npm install @lou.codes/notify
# or
yarn add @lou.codes/notify
```

Import it and use it:

```typescript
import { broadcast } from "@lou.codes/notify";

const { emit, on } = broadcast<{ event: string }>();

const onEvent = on("event");
const offEvent = onEvent(console.log);

const emitEvent = emit("event");
emitEvent("Hello world 1"); // Logs "Hello world 1"
emitEvent("Hello world 2"); // Logs "Hello world 2"
offEvent();
emitEvent("Nope"); // Nothing happens
```

### 🦕 Deno

Import `@lou.codes/notify` using the `npm:` prefix, and use it directly:

```typescript
import { broadcast } from "npm:@lou.codes/notify";

const { emit, on } = broadcast<{ event: string }>();

const onEvent = on("event");
const offEvent = onEvent(console.log);

const emitEvent = emit("event");
emitEvent("Hello world 1"); // Logs "Hello world 1"
emitEvent("Hello world 2"); // Logs "Hello world 2"
offEvent();
emitEvent("Nope"); // Nothing happens
```

### 🌎 Browser

Import `@lou.codes/notify` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { broadcast } from "https://esm.sh/@lou.codes/notify";

	const { emit, on } = broadcast<{ event: string }>();

	const onEvent = on("event");
	const offEvent = onEvent(console.log);

	const emitEvent = emit("event");
	emitEvent("Hello world 1"); // Logs "Hello world 1"
	emitEvent("Hello world 2"); // Logs "Hello world 2"
	offEvent();
	emitEvent("Nope"); // Nothing happens
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/loucyx/libraries/blob/main/packages/@lou.codes/notify/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/libraries.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/libraries
[documentation]: https://lou.codes/libraries/lou_codes_notify/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@lou.codes/notify.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@lou.codes/notify.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/libraries.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flibraries%2Fmain%2Fpackages%2F%40lou.codes%2Fnotify%2Fpackage.json
[lou.codes]: https://lou.codes
