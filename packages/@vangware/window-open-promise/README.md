<img id="logo" alt="@vangware/window-open-promise" src="https://vangware.com/logos/vangware_window_open_promise.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🪟 Promised `Window.open();`.

## Usage

### 📦 Node

Install `@vangware/window-open-promise` as a dependency:

```bash
pnpm add @vangware/window-open-promise
# or
npm install @vangware/window-open-promise
# or
yarn add @vangware/window-open-promise
```

Import it and use it:

```typescript
import { windowOpenPromise } from "@vangware/window-open-promise";

const windowOpen = windowOpenPromise(globalThis);

windowOpen({
	url: "https://example.com", // URL is not required, you can open a blank window
	top: 10,
	left: 10,
})
	.then(newWindow => {
		newWindow.console.log("This will log in the new window.");
		newWindow.addEventListener("beforeunload", _event => {
			console.log("This will log when the new window is closed.");
		});
	})
	.catch(_error => {
		console.error("This will log if the new window can't be opened.");
	});
```

### 🦕 Deno

Import `@vangware/window-open-promise` using the `npm:` prefix, and use it
directly:

```typescript
import { windowOpenPromise } from "npm:@vangware/window-open-promise";

const windowOpen = windowOpenPromise(globalThis);

try {
	const newWindow = await windowOpen({
		url: "https://example.com", // URL is not required, you can open a blank window
		top: 10,
		left: 10,
	});
	newWindow.console.log("This will log in the new window.");
	newWindow.addEventListener("beforeunload", _event => {
		console.log("This will log when the new window is closed.");
	});
} catch (_error) {
	console.error("This will log if the new window can't be opened.");
}
```

### 🌎 Browser

Import `@vangware/window-open-promise` using [esm.sh][esm.sh], and use it
directly:

```html
<script type="module">
	import { windowOpenPromise } from "https://esm.sh/@vangware/window-open-promise";

	const windowOpen = windowOpenPromise(globalThis);

	try {
		const newWindow = await windowOpen({
			url: "https://example.com", // URL is not required, you can open a blank window
			top: 10,
			left: 10,
		});
		newWindow.console.log("This will log in the new window.");
		newWindow.addEventListener("beforeunload", _event => {
			console.log("This will log when the new window is closed.");
		});
	} catch (_error) {
		console.error("This will log if the new window can't be opened.");
	}
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/@vangware/window-open-promise/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://vangware.com/libraries/vangware_window_open_promise/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=Size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Fvangware%2Flibraries%2Fmain%2Fpackages%2F%40vangware%2Fwindow-open-promise%2Fpackage.json
