/* FIXME: All these declarations only exist because the plugins don't provide
their own types. Remove them once they do. */

declare module "@eslint/js" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "@typescript-eslint/eslint-plugin" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "@typescript-eslint/parser" {
	import type { Linter } from "eslint";
	const parserModule: Linter.ParserModule;

	// eslint-disable-next-line import/no-default-export
	export default parserModule;
}
// FIXME: eslint-plugin-functional provides its own types, but they are broken af
declare module "eslint-plugin-functional/flat" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "eslint-plugin-import" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "eslint-plugin-prefer-arrow-functions" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "eslint-plugin-prettier" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "eslint-plugin-react-hooks" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "eslint-plugin-react" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "eslint-plugin-unicorn" {
	import type { ESLint, Linter } from "eslint";

	const plugin: ESLint.Plugin & {
		configs: { recommended: Linter.FlatConfig };
	};

	// eslint-disable-next-line import/no-default-export
	export default plugin;
}
declare module "stylelint-order" {
	import type { Plugin } from "stylelint";

	const plugin: Plugin;
	export = plugin;
}
