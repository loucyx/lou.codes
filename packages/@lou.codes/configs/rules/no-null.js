import eslintPluginNoNull from "eslint-plugin-no-null";
import { freeze } from "../freeze.js";
import { ERROR } from "./levels.js";

/**
 * ESLint `no-null` rules.
 * @see [eslint-plugin-no-null](https://npm.im/eslint-plugin-no-null)
 */
export const noNullRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { "no-null": eslintPluginNoNull },
		rules: {
			/**
			 * Disallow `null` (use `undefined` instead).
			 * @see [Reasoning](https://lou.cx/articles/we-don-t-need-null/)
			 */
			"no-null/no-null": ERROR,
		},
	}),
);
