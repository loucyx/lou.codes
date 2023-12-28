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
			 */
			"react/button-has-type": ERROR,
			/**
			 * Enforce a specific function type for function components.
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
			 */
			"react/jsx-boolean-value": [ERROR, "never"],
			/**
			 * Enforce curly braces or braces in JSX props and/or children.
			 */
			"react/jsx-curly-brace-presence": ERROR,
			/**
			 * Enforce shorthand form for fragments `<></>`.
			 */
			"react/jsx-fragments": [ERROR, "syntax"],
			/**
			 * Enforce event handler naming conventions in JSX.
			 */
			"react/jsx-handler-names": ERROR,
			/**
			 * Prevent react contexts from taking non-stable values.
			 */
			"react/jsx-no-constructed-context-values": ERROR,
			/**
			 * Prevent usage of `javascript:` URLs.
			 */
			"react/jsx-no-script-url": ERROR,
			/**
			 * Prevent usage of unsafe `target='_blank'` without `rel="noreferrer"`.
			 */
			"react/jsx-no-target-blank": ERROR,
			/**
			 * Disallow unnecessary fragments.
			 */
			"react/jsx-no-useless-fragment": ERROR,
			/**
			 * Enforce PascalCase for user-defined JSX components.
			 */
			"react/jsx-pascal-case": ERROR,
			/**
			 * Enforce props alphabetical sorting.
			 */
			"react/jsx-sort-props": ERROR,
			/**
			 * Prevent usage of Array index in keys.
			 */
			"react/no-array-index-key": WARN,
			/**
			 * Don't prevent passing of `children` as props.
			 */
			"react/no-children-prop": OFF,
			/**
			 * Prevent usage of dangerous JSX properties.
			 */
			"react/no-danger": ERROR,
			/**
			 * Prevent multiple component definition per file.
			 */
			"react/no-multi-comp": ERROR,
			/**
			 * Prevent `this` from being used in stateless functional components.
			 */
			"react/no-this-in-sfc": ERROR,
			/**
			 * Prevent usage of unsafe lifecycle methods.
			 */
			"react/no-unsafe": ERROR,
			/**
			 * Prevent creating unstable components inside components.
			 */
			"react/no-unstable-nested-components": ERROR,
			/**
			 * Enforce stateless React Components to be written as a pure function.
			 */
			"react/prefer-stateless-function": ERROR,
			/**
			 * Handled by TypeScript.
			 */
			"react/prop-types": OFF,
			/**
			 * Handled by TypeScript.
			 */
			"react/react-in-jsx-scope": OFF,
		},
		settings: { react: { version: "18" } },
	}),
);
