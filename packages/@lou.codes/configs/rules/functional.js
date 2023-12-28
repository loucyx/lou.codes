import eslintPluginFunctional from "eslint-plugin-functional";
import { freeze } from "../freeze.js";
import { ERROR, WARN } from "./levels.js";

/**
 * ESLint functional programming rules.
 * @see [eslint-plugin-functional](https://npm.im/eslint-plugin-functional)
 */
export const functionalRules = freeze(
	/** @type {const} */ ([
		eslintPluginFunctional.configs.recommended,
		/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
			plugins: { functional: eslintPluginFunctional },
			rules: {
				/**
				 * This rule has good intentions, but generally we have `thunks`.
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
				 */
				"functional/no-mixed-types": WARN,
				/**
				 * Allow returning `undefined`, but not `null`.
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
	]),
);
