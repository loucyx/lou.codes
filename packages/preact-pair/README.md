<img id="logo" alt="preact-pair" src="https://vangware.com/logos/preact_pair.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

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

	const Component = ({ array = [] }) => (
		<ul>
			{array.map(key =>
				h(PairedCount, { key }, usePairedCount => {
					const props = usePairedCount(key);

					return h("li", null, h("button", props));
				}),
			)}
		</ul>
	);
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[article]: https://luke.sh/articles/the-paired-hook-pattern
[changelog]:
	https://github.com/vangware/libraries/blob/main/packages/preact-pair/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://vangware.com/libraries/preact_pair/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/preact-pair.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
