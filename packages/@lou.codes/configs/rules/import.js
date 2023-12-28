import eslintPluginImport from "eslint-plugin-import";
import { freeze } from "../freeze.js";
import { ERROR, OFF } from "./levels.js";

/**
 * ESLint import rules.
 * @see [eslint-plugin-import](https://npm.im/eslint-plugin-import)
 */
export const importRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { import: eslintPluginImport },
		rules: {
			/**
			 * Exports at the end of the file.
			 */
			"import/exports-last": ERROR,
			/**
			 * Imports at the top of the file.
			 */
			"import/first": ERROR,
			/**
			 * Forbids the import of modules using absolute paths.
			 */
			"import/no-absolute-path": ERROR,
			/**
			 * Forbid a module from importing a module that imports it.
			 */
			"import/no-cycle": ERROR,
			/**
			 * Named exports FTW!
			 */
			"import/no-default-export": ERROR,
			/**
			 * Forbid import of modules that aren't declared in `package.json`.
			 */
			"import/no-extraneous-dependencies": ERROR,
			/**
			 * Prevent importing the submodules of other modules.
			 */
			"import/no-internal-modules": OFF,
			/**
			 * Forbids the use of mutable exports with `var` or `let`.
			 */
			"import/no-mutable-exports": ERROR,
			/**
			 * Avoid exported name as the locally imported name of a default export.
			 *
			 * FIXME: Temporarily disabled because of lack of compatibility with flat ESLint config.
			 */
			"import/no-named-as-default": OFF,
			/**
			 * Avoid unnecessary path segments in import statements.
			 */
			"import/no-useless-path-segments": ERROR,
			/**
			 * This is far from being a real standard.
			 */
			"import/no-webpack-loader-syntax": ERROR,
		},
	}),
);
