import { resolve } from "node:path";

export const SCRIPTS_DIRECTORY = new URL(".", import.meta.url).pathname;
export const PACKAGES_DIRECTORY = resolve(SCRIPTS_DIRECTORY, "../packages");
export const TYPE_DOC_FILES_DIRECTORY = resolve(
	SCRIPTS_DIRECTORY,
	"../docs/.typedoc",
);
export const ASTRO_TARGET = resolve(
	SCRIPTS_DIRECTORY,
	"../docs/src/content/docs/libraries",
);
export const ALL_UPPER = ["ansi"];
export const NON_BROWSER_SCRIPT = [
	"@lou.codes/create-package",
	"@lou.codes/constants",
	"@lou.codes/types",
];
