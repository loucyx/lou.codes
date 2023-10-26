import eslintPluginPrettier from "eslint-plugin-prettier";
import { OFF } from "./levels.js";

/**
 * ESLint Prettier rules.
 * @see [eslint-plugin-prettier](https://npm.im/eslint-plugin-prettier)
 */
export default Object.freeze(
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { prettier: eslintPluginPrettier },
		rules: {
			...eslintPluginPrettier.configs.recommended.rules,
			// Disable this error because prettier uses mix of spaces and tabs
			"no-mixed-spaces-and-tabs": OFF,
		},
	}),
);
