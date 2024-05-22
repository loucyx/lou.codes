<img id="logo" alt="preact-pair" src="https://lou.codes/logos/preact_pair.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

🖇️ Util to help with the [paired hook pattern][article].

## Usage

### 📦 Node

Install `preact-pair` as a dependency:

```bash
pnpm add preact-pair
# or
npm install preact-pair
# or
yarn add preact-pair
```

Import it and use it:

```tsx
import { useState } from "preact";
import { pair } from "preact-pair";

const useCount = initialCount => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map(key => (
			<PairedCount key={key}>
				{usePairedCount => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
```

### 🦕 Deno

Import `preact-pair` using the `npm:` prefix, and use it directly:

```tsx
import { useState } from "npm:preact";
import { pair } from "npm:preact-pair";

const useCount = initialCount => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map(key => (
			<PairedCount key={key}>
				{usePairedCount => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
```

### 🌎 Browser

Import `preact-pair` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { h, useState } from "https://esm.sh/preact";
	import { pair } from "https://esm.sh/preact-pair";

	const useCount = initialCount => {
		const [count, setCount] = useState(initialCount);

		return { onClick: () => setCount(count + 1), children: count };
	};

	const PairedCount = pair(useCount);

	const Component = ({ array = [] }) =>
		h("ul", {
			children: array.map(key =>
				h(PairedCount, {
					key,
					children: usePairedCount => {
						const props = usePairedCount(key);

						return h("li", { children: h("button", props) });
					},
				}),
			),
		});
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[article]: https://lou.cx/articles/the-paired-hook-pattern
[changelog]:
	https://github.com/loucyx/lou.codes/blob/main/packages/preact-pair/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?label=Test+Coverage&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/preact_pair/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/preact-pair.svg?label=License&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/preact-pair.svg?label=NPM+Version&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?label=Issues&labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=Bundle+Size&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2Fpreact-pair%2Fpackage.json
