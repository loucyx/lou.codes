import brotli from "brotli-size/dist/index.js";
import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";

const { default: size } = brotli;

/** @param {number} bytes */
const kibSize = bytes => (bytes / 1024).toFixed(2);

/**
 * @param {string} packagePath
 */
const updateSize = packagePath => {
	const outFile = `./packages/${packagePath}/dist/index.bundle.js`;
	const packageJsonLocation = `./packages/${packagePath}/package.json`;

	return build({
		allowOverwrite: true,
		bundle: true,
		entryPoints: [`./packages/${packagePath}/dist/index.js`],
		format: "esm",
		minify: true,
		outfile: outFile,
		platform: "node",
	})
		.then(() => readFile(outFile, "utf-8"))
		.then(fileContent => size(fileContent))
		.then(kibSize)
		.then(
			size =>
				(
					// eslint-disable-next-line no-console
					console.log(`${packagePath}: ${size} KiB`),
					Promise.all([
						size,
						readFile(packageJsonLocation, "utf-8").then(JSON.parse),
					])
				),
		)
		.then(
			/** @param {[size: string, package: import("./package.json")]} packageJson */ ([
				size,
				packageJson,
			]) =>
				Object.fromEntries(
					Object.entries(packageJson).map(([key, value]) => [
						key,
						key === "size" ? size : value,
					]),
				),
		)
		.then(packageJson =>
			writeFile(
				packageJsonLocation,
				`${JSON.stringify(packageJson, undefined, "\t")}\n`,
				"utf-8",
			),
		);
};

void Promise.all(
	[
		"@lou.codes/ansi",
		"@lou.codes/cron",
		"@lou.codes/diff",
		"@lou.codes/iterables",
		"@lou.codes/notify",
		"@lou.codes/parsers",
		"@lou.codes/predicates",
		"@lou.codes/prompts",
		"@lou.codes/test",
		"@lou.codes/types",
		"@lou.codes/utils",
		"window-open-promise",
		"preact-pair",
		"react-pair",
	].map(updateSize),
)
	// eslint-disable-next-line no-console
	.then(() => console.log("All Done"))
	// eslint-disable-next-line no-console
	.catch(console.error);
