import type { ReadOnlyArray } from "@lou.codes/types";

/**
 * If we import `package.json` directly, the compiled code ends up nested,
 * so this file needs to stay in sync with `package.json` manually 😞
 */
export type PackageConfiguration = {
	readonly name: string;
	readonly description: string;
	readonly version: string;
	readonly author: {
		readonly email: string;
		readonly name: string;
		readonly url: string;
	};
	readonly bin: string;
	readonly bugs: {
		readonly email: string;
		readonly url: string;
	};
	readonly dependencies: {
		readonly "@lou.codes/ansi": string;
		readonly "@lou.codes/prompts": string;
	};
	readonly devDependencies: {
		readonly "@types/node": string;
		readonly "@lou.codes/configs": string;
		readonly "@lou.codes/test": string;
		readonly "@lou.codes/types": string;
		readonly c8: string;
		readonly eslint: string;
		readonly "npm-run-all": string;
		readonly prettier: string;
		readonly rimraf: string;
		readonly "simple-git-hooks": string;
		readonly stylelint: string;
		readonly tsx: string;
		readonly typescript: string;
	};
	readonly engines: {
		readonly node: string;
		readonly pnpm: string;
	};
	readonly files: ReadOnlyArray<string>;
	readonly homepage: string;
	readonly keywords: ReadOnlyArray<string>;
	readonly license: string;
	readonly repository: {
		readonly type: string;
		readonly url: string;
	};
	readonly scripts: {
		readonly clean: string;
		readonly compile: string;
		readonly lint: string;
		readonly "lint:fix": string;
		readonly prepare: string;
		readonly prepublishOnly: string;
		readonly prettify: string;
	};
	readonly sideEffects: false;
	readonly type: string;
};
