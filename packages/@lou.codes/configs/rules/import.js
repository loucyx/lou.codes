import eslintPluginImport from "eslint-plugin-import";
import { ERROR, OFF } from "./levels.js";

/**
 * ESLint import rules.
 * @see [eslint-plugin-import](https://npm.im/eslint-plugin-import)
 */
export const importRules =
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { import: eslintPluginImport },
		rules: {
			/**
			 * Exports at the end of the file.
			 *
			 * @see [import/exports-last](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md)
			 */
			"import/exports-last": ERROR,

			/**
			 * Imports at the top of the file.
			 *
			 * @see [import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)
			 */
			"import/first": ERROR,

			/**
			 * Forbids the import of modules using absolute paths.
			 *
			 * @see [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md)
			 */
			"import/no-absolute-path": ERROR,

			/**
			 * Forbid a module from importing a module that imports it.
			 *
			 * @see [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)
			 */
			"import/no-cycle": ERROR,

			/**
			 * Forbid import of modules that aren't declared in `package.json`.
			 *
			 * @see [import/no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md)
			 */
			"import/no-extraneous-dependencies": ERROR,

			/**
			 * Prevent importing the submodules of other modules.
			 *
			 * @see [import/no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md)
			 */
			"import/no-internal-modules": OFF,

			/**
			 * Forbids the use of mutable exports with `var` or `let`.
			 *
			 * @see [import/no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md)
			 */
			"import/no-mutable-exports": ERROR,

			/**
			 * Avoid exported name as the locally imported name of a default export.
			 *
			 * FIXME: Temporarily disabled because of lack of compatibility with flat ESLint config.
			 *
			 * @see [import/no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md)
			 */
			"import/no-named-as-default": OFF,

			/**
			 * Avoid unnecessary path segments in import statements.
			 *
			 * @see [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md)
			 */
			"import/no-useless-path-segments": ERROR,

			/**
			 * This is far from being a real standard.
			 *
			 * @see [import/no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md)
			 */
			"import/no-webpack-loader-syntax": ERROR,
		},
	});
