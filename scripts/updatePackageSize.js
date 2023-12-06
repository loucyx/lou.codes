import brotli from "brotli-size/dist/index.js";
import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import { bytesToKibBytes } from "./bytesToKibBytes.js";
import { PACKAGES_DIRECTORY } from "./constants.js";

const { default: size } = brotli;

/**
 * @param {string} packagePath
 */
export const updatePackageSize = packagePath => {
	const outFile = `${PACKAGES_DIRECTORY}/${packagePath}/dist/index.bundle.js`;
	const packageJsonLocation = `${PACKAGES_DIRECTORY}/${packagePath}/package.json`;

	return build({
		allowOverwrite: true,
		bundle: true,
		entryPoints: [`${PACKAGES_DIRECTORY}/${packagePath}/dist/index.js`],
		format: "esm",
		minify: true,
		outfile: outFile,
		platform: "node",
	})
		.then(() => readFile(outFile, "utf-8"))
		.then(fileContent => size(fileContent))
		.then(bytesToKibBytes)
		.then(
			kibByteSize =>
				(
					// eslint-disable-next-line no-console
					console.log(`${packagePath}: ${kibByteSize} KiB`),
					Promise.all([
						kibByteSize,
						readFile(packageJsonLocation, "utf-8").then(JSON.parse),
					])
				),
		)
		.then(
			/** @param {[size: string, package: import("../package.json")]} packageJson */ ([
				kibByteSize,
				packageJson,
			]) =>
				Object.fromEntries(
					Object.entries(packageJson).map(([key, value]) => [
						key,
						key === "size" ? kibByteSize : value,
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
