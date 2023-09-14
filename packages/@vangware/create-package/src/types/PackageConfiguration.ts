import type { ReadOnly, ReadOnlyArray } from "@vangware/types";

/**
 * If we import `package.json` directly, the compiled code ends up nested,
 * so this file needs to stay in sync with `package.json` manually 😞
 */
export type PackageConfiguration = ReadOnly<{
	name: string;
	description: string;
	version: string;
	author: { email: string; name: string; url: string };
	bin: string;
	bugs: { email: string; url: string };
	dependencies: {
		"@vangware/ansi": string;
		"@vangware/prompts": string;
	};
	devDependencies: {
		"@types/node": string;
		"@vangware/configs": string;
		"@vangware/test": string;
		"@vangware/types": string;
		c8: string;
		eslint: string;
		"npm-run-all": string;
		prettier: string;
		rimraf: string;
		"simple-git-hooks": string;
		stylelint: string;
		tsx: string;
		typescript: string;
	};
	engines: { node: string; pnpm: string };
	files: ReadOnlyArray<string>;
	homepage: string;
	keywords: ReadOnlyArray<string>;
	license: string;
	repository: { type: string; url: string };
	scripts: {
		clean: string;
		compile: string;
		lint: string;
		"lint:fix": string;
		prepare: string;
		prepublishOnly: string;
		prettify: string;
	};
	sideEffects: false;
	type: string;
}>;
