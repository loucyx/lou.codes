import eslintPluginPrettier from "eslint-plugin-prettier";
import { freeze } from "../freeze.js";
import { OFF } from "./levels.js";

/**
 * ESLint Prettier rules.
 * @see [eslint-plugin-prettier](https://npm.im/eslint-plugin-prettier)
 */
export const prettierRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { prettier: eslintPluginPrettier },
		rules: {
			...eslintPluginPrettier.configs.recommended.rules,
			/**
			 * Handled by Prettier's `trailingComma`.
			 */
			"comma-dangle": OFF,
			/**
			 * Handled by Prettier's `endOfLine`.
			 */
			"linebreak-style": OFF,
			/**
			 * Handled by Prettier's `printWidth`.
			 */
			"max-len": OFF,
			/**
			 * Handled by Prettier.
			 */
			"newline-per-chained-call": OFF,
			/**
			 * Disable this error because prettier uses mix of spaces and tabs.
			 */
			"no-mixed-spaces-and-tabs": OFF,
			/**
			 * Handled by Prettier.
			 */
			"no-unexpected-multiline": OFF,
		},
	}),
);
