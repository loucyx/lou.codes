import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import { USER } from "../constants.js";
import type { Answers } from "../types/Answers.js";
import { userClean } from "../userClean.js";

export const generateReadMe = (
	answers: Answers,
) => `<img id="logo" alt="${userClean(
	answers.name,
)} by ${USER}" src="https://lou.codes/logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]
![Size][size-badge]

${answers.description}

## Usage

### 📦 Node

Install \`${answers.name}\` as a dependency:

\`\`\`bash
pnpm add ${answers.name}
# or
npm install ${answers.name}
# or
yarn add ${answers.name}
\`\`\`

Import it and use it:

\`\`\`typescript
import { greet } from "${answers.name}";

greet("Lou"); // "Hello, Lou!"
\`\`\`

### 🦕 Deno

Import \`${answers.name}\` using the \`npm:\` prefix, and use it directly:

\`\`\`typescript
import { greet } from "npm:${answers.name}";

greet("Lou"); // "Hello, Lou!"
\`\`\`

### 🌎 Browser

Import \`${answers.name}\` using [esm.sh][esm.sh], and use it directly:

\`\`\`html
<script type="module">
	import { greet } from "https://esm.sh/${answers.name}";

	greet("Lou"); // "Hello, Lou!"
</script>
\`\`\`

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/loucyx/lou.codes/blob/main/packages/@${USER}/${userClean(
	answers.name,
)}/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/loucyx/lou.codes.svg?labelColor=666&color=0a8
[coverage]: https://coveralls.io/github/loucyx/lou.codes
[documentation]: https://lou.codes/libraries/${answers.name
	.replace("@", EMPTY_STRING)
	.replaceAll(/[-/]/gu, "_")}/
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/${answers.name}.svg?labelColor=666&color=0a8
[npm-version-badge]:
	https://img.shields.io/npm/v/${answers.name}.svg?labelColor=666&color=0a8
[open-issues-badge]:
	https://img.shields.io/github/issues/loucyx/lou.codes.svg?labelColor=666&color=0a8
[size-badge]:
	https://img.shields.io/badge/dynamic/json?label=brotli&labelColor=666&color=0a8&suffix=KiB&query=%24.size&url=https%3A%2F%2Fraw.githubusercontent.com%2Floucyx%2Flou.codes%2Fmain%2Fpackages%2F${
		answers.name
	}%2Fpackage.json
[lou.codes]: https://lou.codes
`;
