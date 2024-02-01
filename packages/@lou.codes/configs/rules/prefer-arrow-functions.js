import eslintPluginPreferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import { freeze } from "../freeze.js";
import { ERROR } from "./levels.js";

/**
 * ESLint `prefer-arrow` rules.
 * @see [eslint-plugin-prefer-arrow-functions](https://npm.im/eslint-plugin-prefer-arrow-functions)
 */
export const preferArrowFunctionsRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { "prefer-arrow-functions": eslintPluginPreferArrowFunctions },
		rules: {
			/**
			 * Prefer arrow functions over traditional functions.
			 *
			 * @see [prefer-arrow-functions/prefer-arrow-functions](https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions?tab=readme-ov-file#-options)
			 */
			"prefer-arrow-functions/prefer-arrow-functions": [
				ERROR,
				{
					allowNamedFunctions: false,
					classPropertiesAllowed: false,
					disallowPrototype: false,
					returnStyle: "implicit",
					singleReturnOnly: false,
				},
			],
		},
	}),
);
