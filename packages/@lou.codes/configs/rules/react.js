import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { freeze } from "../freeze.js";
import { ERROR, OFF, WARN } from "./levels.js";

/**
 * ESLint React rules.
 * @see [eslint-plugin-react](https://npm.im/eslint-plugin-react)
 */
export const reactRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: {
			react: eslintPluginReact,
			"react-hooks": eslintPluginReactHooks,
		},
		rules: {
			...eslintPluginReactHooks.configs.recommended.rules,

			/**
			 * Prevent usage of button elements without an explicit type attribute.
			 *
			 * @see [react/button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md)
			 */
			"react/button-has-type": ERROR,

			/**
			 * Enforce a specific function type for function components.
			 *
			 * @see [react/function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md)
			 */
			"react/function-component-definition": [
				ERROR,
				{
					namedComponents: "arrow-function",
					unnamedComponents: "arrow-function",
				},
			],

			/**
			 * Enforce boolean attributes notation in JSX to never set it explicitly.
			 *
			 * @see [react/jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md)
			 */
			"react/jsx-boolean-value": [ERROR, "never"],

			/**
			 * Enforce curly braces or braces in JSX props and/or children.
			 *
			 * @see [react/jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md)
			 */
			"react/jsx-curly-brace-presence": ERROR,

			/**
			 * Enforce shorthand form for fragments `<></>`.
			 *
			 * @see [react/jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md)
			 */
			"react/jsx-fragments": [ERROR, "syntax"],

			/**
			 * Enforce event handler naming conventions in JSX.
			 *
			 * @see [react/jsx-handler-names](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-handler-names.md)
			 */
			"react/jsx-handler-names": ERROR,

			/**
			 * Prevent react contexts from taking non-stable values.
			 *
			 * @see [react/jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-constructed-context-values.md)
			 */
			"react/jsx-no-constructed-context-values": ERROR,

			/**
			 * Prevent usage of `javascript:` URLs.
			 *
			 * @see [react/jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-script-url.md)
			 */
			"react/jsx-no-script-url": ERROR,

			/**
			 * Prevent usage of unsafe `target='_blank'` without `rel="noreferrer"`.
			 *
			 * @see [react/jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md)
			 */
			"react/jsx-no-target-blank": ERROR,

			/**
			 * Disallow unnecessary fragments.
			 *
			 * @see [react/jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-useless-fragment.md)
			 */
			"react/jsx-no-useless-fragment": ERROR,

			/**
			 * Enforce PascalCase for user-defined JSX components.
			 *
			 * @see [react/jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md)
			 */
			"react/jsx-pascal-case": ERROR,

			/**
			 * Enforce props alphabetical sorting.
			 *
			 * @see [react/jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md)
			 */
			"react/jsx-sort-props": ERROR,

			/**
			 * Prevent usage of Array index in keys.
			 *
			 * @see [react/no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md)
			 */
			"react/no-array-index-key": WARN,

			/**
			 * Don't prevent passing of `children` as props.
			 *
			 * @see [react/no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md)
			 */
			"react/no-children-prop": OFF,

			/**
			 * Prevent usage of dangerous JSX properties.
			 *
			 * @see [react/no-danger](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-danger.md)
			 */
			"react/no-danger": ERROR,

			/**
			 * Prevent multiple component definition per file.
			 *
			 * @see [react/no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-multi-comp.md)
			 */
			"react/no-multi-comp": ERROR,

			/**
			 * Prevent `this` from being used in stateless functional components.
			 *
			 * @see [react/no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md)
			 */
			"react/no-this-in-sfc": ERROR,

			/**
			 * Prevent usage of unsafe lifecycle methods.
			 *
			 * @see [react/no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unsafe.md)
			 */
			"react/no-unsafe": ERROR,

			/**
			 * Prevent creating unstable components inside components.
			 *
			 * @see [react/no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unstable-nested-components.md)
			 */
			"react/no-unstable-nested-components": ERROR,

			/**
			 * Enforce stateless React Components to be written as a pure function.
			 *
			 * @see [react/prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md)
			 */
			"react/prefer-stateless-function": ERROR,

			/**
			 * Handled by TypeScript.
			 *
			 * @see [react/prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md)
			 */
			"react/prop-types": OFF,

			/**
			 * Handled by TypeScript.
			 *
			 * @see [react/react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md)
			 */
			"react/react-in-jsx-scope": OFF,
		},
		settings: { react: { version: "18" } },
	}),
);
