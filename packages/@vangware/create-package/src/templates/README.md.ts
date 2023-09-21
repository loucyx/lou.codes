import { USER } from "../constants.js";
import type { Answers } from "../types/Answers.js";
import { userClean } from "../userClean.js";

export default ({ name, description }: Answers) => {
	const path = `${USER}/${userClean(name)}`;

	return `<img id="logo" alt="${userClean(
		name,
	)} by ${USER}" src="https://vangware.com/logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

${description}

## Usage

### 📦 Node

Install \`${name}\` as a dependency:

\`\`\`bash
pnpm add ${name}
# or
npm install ${name}
# or
yarn add ${name}
\`\`\`

Import it and use it:

\`\`\`typescript
import { greet } from "${name}";

greet("Vangware"); // "Hello, Vangware!"
\`\`\`

### 🦕 Deno

Import \`${name}\` using the \`npm:\` prefix, and use it directly:

\`\`\`typescript
import { greet } from "npm:${name}";

greet("Vangware"); // "Hello, Vangware!"
\`\`\`

### 🌎 Browser

Import \`${name}\` using [esm.sh][esm.sh], and use it directly:

\`\`\`html
<script type="module">
	import { greet } from "https://esm.sh/${name}";

	greet("Vangware"); // "Hello, Vangware!"
</script>
\`\`\`

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/libraries/blob/main/packages/${path}/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/vangware/libraries
[documentation]: https://vangware.com/libraries/${name
		.replace("@", "")
		.replace(/[-/]/gu, "_")}.html
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/${name}.svg?style=for-the-badge&labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/${name}.svg?style=for-the-badge&labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/libraries.svg?style=for-the-badge&labelColor=666&color=0a8
[vangware]: https://vangware.com
`;
};
