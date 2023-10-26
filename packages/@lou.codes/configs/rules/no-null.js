import eslintPluginNoNull from "eslint-plugin-no-null";
import { ERROR } from "./levels.js";

/**
 * ESLint `no-null` rules.
 * @see [eslint-plugin-no-null](https://npm.im/eslint-plugin-no-null)
 */
export default Object.freeze(
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { "no-null": eslintPluginNoNull },
		// Disallow `null` (use `undefined` instead)
		rules: { "no-null/no-null": ERROR },
	}),
);
