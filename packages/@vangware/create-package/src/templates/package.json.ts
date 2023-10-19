import type { Answers } from "../types/Answers.js";

export default ({
	name,
	description,
	packageConfiguration: { author, bugs, engines, repository },
}: Answers) =>
	JSON.stringify(
		{
			name,
			// eslint-disable-next-line sort-keys
			description,
			version: "1.0.0",
			// eslint-disable-next-line sort-keys
			author,
			bugs,
			engines,
			exports: { ".": "./dist/index.js", "./*": "./dist/*" },
			files: ["dist"],
			homepage: `https://vangware.com/libraries/${name
				.replace("@", "")
				.replace(/[-/]/gu, "_")}`,
			keywords: ["typescript", "vangware"],
			license: "MIT",
			repository,
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
