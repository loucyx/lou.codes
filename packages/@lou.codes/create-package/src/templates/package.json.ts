import { EMPTY_STRING } from "@lou.codes/constants";
import type { Answers } from "../types/Answers.js";

export const generatePackageJSON = (answers: Answers) =>
	JSON.stringify(
		{
			name: answers.name,
			// eslint-disable-next-line sort-keys
			description: answers.description,
			version: "1.0.0",
			// eslint-disable-next-line sort-keys
			author: answers.packageConfiguration.author,
			bugs: answers.packageConfiguration.bugs,
			engines: answers.packageConfiguration.engines,
			exports: { ".": "./dist/index.js", "./*": "./dist/*" },
			files: ["dist"],
			homepage: `https://lou.codes/libraries/${answers.name
				.replace("@", EMPTY_STRING)
				.replace(/[.-/]/gu, "_")}`,
			keywords: ["lou.codes", "loucyx", "typescript"],
			license: "MIT",
			repository: answers.packageConfiguration.repository,
			scripts: {
				clean: "rimraf ./dist",
				compile: "tsc --project ./tsconfig.dist.json",
				"git:pre-push": "run-s --print-label clean compile lint test",
				lint: "eslint {src,tests}",
				"lint:fix": "eslint {src,tests} --fix",
				prepublishOnly: "run-s --print-label clean compile prettify",
				prettify:
					"prettier --ignore-path=.prettierignore --log-level=warn --write './dist/**/*.{js,ts}'",
				test: "NODE_OPTIONS='--import tsx' pnpm exec test",
			},
			sideEffects: false,
			type: "module",
			types: "./dist/index.d.ts",
		},
		undefined,
		"	",
	);
