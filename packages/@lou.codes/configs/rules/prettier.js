import eslintPluginPrettier from "eslint-plugin-prettier";
import { off } from "./off.js";
import { typescriptNamespace } from "./typescript.js";

/**
 * ESLint TypeScript namespace.
 */
export const prettierNamespace = "prettier";

/**
 * ESLint Prettier rules.
 * @see [eslint-plugin-prettier](https://npm.im/eslint-plugin-prettier)
 */
export const prettierRules =
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { [prettierNamespace]: eslintPluginPrettier },
		rules: off(
			`${typescriptNamespace}/comma-dangle`,
			"comma-dangle",
			"eol-last",
			"linebreak-style",
			"max-len",
			"newline-per-chained-call",
			"no-mixed-spaces-and-tabs",
			"no-trailing-spaces",
			"no-unexpected-multiline",
			"quote-props",
		),
	});
