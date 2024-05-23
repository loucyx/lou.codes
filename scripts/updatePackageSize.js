import brotli from "brotli-size/dist/index.js";
import { build } from "esbuild";
import {
	access,
	constants,
	readFile,
	readdir,
	writeFile,
} from "node:fs/promises";
import { minify } from "terser";
import { bytesToKibBytes } from "./bytesToKibBytes.js";
import { PACKAGES_DIRECTORY } from "./constants.js";

const { default: size } = brotli;

const sharedConfiguration =
	/** @type {const} @satisfies {Parameters<typeof build>[0]} */ ({
		allowOverwrite: true,
		bundle: true,
		format: "esm",
		minify: true,
		platform: "node",
		treeShaking: true,
	});

/** @param {string} outFile */
const terser =
	outFile =>
	/**
	 * @param {string} content */ content =>
		minify(content, {
			compress: { pure_getters: true },
			ecma: 2020,
			mangle: true,
			module: true,
		})
			.then(({ code = "" }) => (writeFile(outFile, code, "utf8"), code))
			.catch(() => Promise.reject(outFile));

/**
 * @param {string} packagePath
 */
export const updatePackageSize = packagePath => {
	const distDirectory = `${PACKAGES_DIRECTORY}/${packagePath}/dist`;
	const index = `${distDirectory}/index.js`;
	const outFile = `${distDirectory}/index.bundle.js`;
	const outDir = `${distDirectory}/bundle`;
	const packageJsonLocation = `${PACKAGES_DIRECTORY}/${packagePath}/package.json`;

	return access(index, constants.F_OK)
		.then(() =>
			build({
				...sharedConfiguration,
				entryPoints: [index],
				outfile: outFile,
			})
				.then(() => readFile(outFile, "utf8"))
				.then(terser(outFile)),
		)
		.catch(() =>
			readdir(distDirectory)
				.then(entryPoints =>
					entryPoints.filter(
						entryPoint =>
							entryPoint.endsWith(".js") &&
							!entryPoint.endsWith("/index.bundle.js"),
					),
				)
				.then(entryPoints =>
					build({
						...sharedConfiguration,
						entryPoints: entryPoints.map(
							entryPoint => `${distDirectory}/${entryPoint}`,
						),
						outdir: outDir,
					}).then(() =>
						Promise.all(
							entryPoints.map(entryPoint =>
								readFile(
									`${outDir}/${entryPoint}`,
									"utf8",
								).then(terser(`${outDir}/${entryPoint}`)),
							),
						).then(filesContent => filesContent.join("")),
					),
				),
		)
		.then(fileContent => size(fileContent))
		.then(bytesToKibBytes)
		.then(kibByteSize =>
			Promise.all([
				kibByteSize,
				readFile(packageJsonLocation, "utf8").then(JSON.parse),
			]),
		)
		.then(
			/** @param {[size: string, package: import("../package.json") & { size: string }]} packageJson */ ([
				kibByteSize,
				packageJson,
			]) =>
				(
					// eslint-disable-next-line no-console
					console[packageJson.size === kibByteSize ? "log" : "error"](
						`${packagePath}: ${kibByteSize} KiB`,
					),
					/** @type {const} */ ([
						Object.fromEntries(
							Object.entries(packageJson).map(([key, value]) => [
								key,
								key === "size" ? kibByteSize : value,
							]),
						),
						packageJson.size !== kibByteSize,
					])
				),
		)
		.then(([packageJson, hasChanges]) =>
			writeFile(
				packageJsonLocation,
				`${JSON.stringify(packageJson, undefined, "\t")}\n`,
				"utf8",
			).then(() =>
				hasChanges ? Promise.reject(packageJson.name) : undefined,
			),
		);
};
