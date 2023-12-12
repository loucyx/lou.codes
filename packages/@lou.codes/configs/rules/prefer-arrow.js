import eslintPluginPreferArrow from "eslint-plugin-prefer-arrow";
import { ERROR } from "./levels.js";

/**
 * ESLint `prefer-arrow` rules.
 * @see [eslint-plugin-prefer-arrow](https://npm.im/eslint-plugin-prefer-arrow)
 */
export const preferArrowRules = Object.freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { "prefer-arrow": eslintPluginPreferArrow },
		rules: {
			/**
			 * Prefer arrow functions over traditional functions.
			 */
			"prefer-arrow/prefer-arrow-functions": [
				ERROR,
				{
					/**
					 * Warn when functions which could be replaced with arrow functions defined as class instance fields.
					 */
					classPropertiesAllowed: true,
				},
			],
		},
	}),
);
