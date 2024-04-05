import eslintPluginFunctional from "eslint-plugin-functional/flat";
import { freeze } from "../freeze.js";
import { ERROR, OFF, WARN } from "./levels.js";

/**
 * ESLint functional programming rules.
 * @see [eslint-plugin-functional](https://npm.im/eslint-plugin-functional)
 */
export const functionalRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		...eslintPluginFunctional.configs.recommended,
		rules: {
			...eslintPluginFunctional.configs.recommended.rules,

			/**
			 * Handled by `functional/prefer-immutable-types`.
			 *
			 * @see [@typescript-eslint/prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types/)
			 * @see [functional/prefer-immutable-types](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/prefer-immutable-types.md)
			 */
			"@typescript-eslint/prefer-readonly-parameter-types": OFF,

			/**
			 * This rule has good intentions, but generally we have `thunks`.
			 *
			 * @see [functional/functional-parameters](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/functional-parameters.md)
			 */
			"functional/functional-parameters": [
				ERROR,
				{
					allowArgumentsKeyword: false,
					allowRestParameter: true,
					enforceParameterCount: false,
				},
			],

			/**
			 * Avoid functions called and not being assigned. Ignore `void`.
			 *
			 * @see [functional/no-expression-statements](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/no-expression-statements.md)
			 */
			"functional/no-expression-statements": [
				ERROR,
				{
					ignoreCodePattern: [
						// Optional chained functions
						"\\?\\.\\(",
						// Yielded values
						"\\s*yield",
						// Assignments (handled by other rules)
						"\\w+\\s*=\\s*.",
						// Voided values
						"\\s*void",
					],
					ignoreVoid: true,
				},
			],

			/**
			 * Warn about mix of functions and values in objects.
			 *
			 * @see [functional/no-mixed-types](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/no-mixed-types.md)
			 */
			"functional/no-mixed-types": WARN,

			/**
			 * Allow returning `undefined`, but not `null`.
			 *
			 * @see [functional/no-return-void](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/no-return-void.md)
			 */
			"functional/no-return-void": [
				ERROR,
				{
					allowNull: false,
					allowUndefined: true,
					ignoreInferredTypes: true,
				},
			],

			/**
			 * Shallow read-only parameters.
			 *
			 * @see [functional/prefer-immutable-types](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/prefer-immutable-types.md)
			 */
			"functional/prefer-immutable-types": [
				ERROR,
				{
					enforcement: "None",
					ignoreInferredTypes: true,
					parameters: { enforcement: "ReadonlyShallow" },
				},
			],
		},
	}),
);
