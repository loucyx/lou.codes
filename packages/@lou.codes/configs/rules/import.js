import eslintPluginImport from "eslint-plugin-import";
import { ERROR, OFF } from "./levels.js";

/**
 * ESLint import rules.
 * @see [eslint-plugin-import](https://npm.im/eslint-plugin-import)
 */
export default Object.freeze(
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { import: eslintPluginImport },
		rules: {
			// Forbid import of modules that aren't declared in the package.json
			"import/no-extraneous-dependencies": ERROR,
			// Prevent importing the submodules of other modules.
			"import/no-internal-modules": OFF,
		},
	}),
);
