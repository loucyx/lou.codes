import eslintPluginPreferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import { ERROR } from "./levels.js";

/**
 * ESLint `prefer-arrow-functions` namespace.
 */
export const preferArrowFunctionsNamespace = "prefer-arrow-functions";

/**
 * ESLint `prefer-arrow-functions` rules.
 * @see [eslint-plugin-prefer-arrow-functions](https://npm.im/eslint-plugin-prefer-arrow-functions)
 */
export const preferArrowFunctionsRules =
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: {
			[preferArrowFunctionsNamespace]: eslintPluginPreferArrowFunctions,
		},
		rules: {
			/**
			 * Prefer arrow functions over traditional functions.
			 *
			 * @see [prefer-arrow-functions/prefer-arrow-functions](https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions?tab=readme-ov-file#-options)
			 */
			[`${preferArrowFunctionsNamespace}/prefer-arrow-functions`]: [
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
	});
