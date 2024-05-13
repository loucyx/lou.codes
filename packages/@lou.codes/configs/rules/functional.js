import eslintPluginFunctional from "eslint-plugin-functional/flat";
import { ERROR, OFF, WARN } from "./levels.js";
import { typescriptNamespace } from "./typescript.js";

/**
 * ESLint functional programming namespace.
 */
export const functionalNamespace = "functional";

/**
 * ESLint functional programming rules.
 * @see [eslint-plugin-functional](https://npm.im/eslint-plugin-functional)
 */
export const functionalRules =
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { [functionalNamespace]: eslintPluginFunctional },
		rules: {
			...eslintPluginFunctional.configs.recommended.rules,

			/**
			 * Handled by `functional/prefer-immutable-types`.
			 *
			 * @see [@typescript-eslint/prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types/)
			 * @see [functional/prefer-immutable-types](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/prefer-immutable-types.md)
			 */
			[`${typescriptNamespace}/prefer-readonly-parameter-types`]: OFF,

			/**
			 * This rule has good intentions, but generally we have `thunks`.
			 *
			 * @see [functional/functional-parameters](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/functional-parameters.md)
			 */
			[`${functionalNamespace}/functional-parameters`]: [
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
			[`${functionalNamespace}/no-expression-statements`]: [
				ERROR,
				{
					ignoreCodePattern: [
						// Optional chained functions
						String.raw`\?\.\(`,
						// Yielded values
						String.raw`\s*yield`,
						// Assignments (handled by other rules)
						String.raw`\w+\s*=\s*.`,
						// Voided values
						String.raw`\s*void`,
					],
					ignoreVoid: true,
				},
			],

			/**
			 * Avoid usage of `let` (allowing it in `for` and inside functions).
			 *
			 * @see [functional/no-let](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/no-let.md)
			 */
			[`${functionalNamespace}/no-let`]: [
				ERROR,
				{ allowInForLoopInit: true, allowInFunctions: true },
			],

			/**
			 * Warn about mix of functions and values in objects.
			 *
			 * @see [functional/no-mixed-types](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/no-mixed-types.md)
			 */
			[`${functionalNamespace}/no-mixed-types`]: [
				WARN,
				{ checkTypeLiterals: false },
			],

			/**
			 * Allow returning `undefined`, but not `null`.
			 *
			 * @see [functional/no-return-void](https://github.com/eslint-functional/eslint-plugin-functional/blob/HEAD/docs/rules/no-return-void.md)
			 */
			[`${functionalNamespace}/no-return-void`]: [
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
			[`${functionalNamespace}/prefer-immutable-types`]: [
				ERROR,
				{
					enforcement: "None",
					ignoreInferredTypes: true,
					parameters: { enforcement: "ReadonlyShallow" },
				},
			],
		},
	});
