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
			/**
			 * Handled by Prettier's `trailingComma`.
			 *
			 * @see [@typescript-eslint/comma-dangle](https://typescript-eslint.io/rules/comma-dangle/)
			 * @see [trailingComma](https://prettier.io/docs/en/options.html#trailing-commas)
			 */
			"@typescript-eslint/comma-dangle": OFF,

			/**
			 * Handled by Prettier's `trailingComma`.
			 *
			 * @see [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
			 */
			"comma-dangle": OFF,

			/**
			 * Handled by Prettier.
			 *
			 * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
			 */
			"eol-last": OFF,

			/**
			 * Handled by Prettier's `endOfLine`.
			 *
			 * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
			 */
			"linebreak-style": OFF,

			/**
			 * Handled by Prettier's `printWidth`.
			 *
			 * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
			 */
			"max-len": OFF,

			/**
			 * Handled by Prettier.
			 *
			 * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
			 */
			"newline-per-chained-call": OFF,

			/**
			 * Disable this error because prettier uses mix of spaces and tabs.
			 *
			 * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
			 */
			"no-mixed-spaces-and-tabs": OFF,

			/**
			 * Handled by Prettier.
			 *
			 * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
			 */
			"no-trailing-spaces": OFF,

			/**
			 * Handled by Prettier.
			 *
			 * @see [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
			 */
			"no-unexpected-multiline": OFF,

			/**
			 * Handled by prettier.
			 *
			 * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
			 */
			"quote-props": OFF,
		},
	}),
);
