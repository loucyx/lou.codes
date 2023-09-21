import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const PACKAGES_DIRECTORY = "packages";
const TYPE_DOC_FILES_DIRECTORY = "docs/.typedoc/modules";
const ASTRO_TARGET = "docs/src/content/docs/libraries";

/**
 * @param {string} directory
 */
const readDirectoryRecursive = directory =>
	readdir(directory, { recursive: true }).then(files =>
		files.map(file => join(directory, file)),
	);

/**
 * @param {string} filename
 */
const getPackageFiles = filename => () =>
	readDirectoryRecursive(PACKAGES_DIRECTORY).then(files =>
		files.filter(
			file => !file.includes("node_modules") && file.endsWith(filename),
		),
	);

const getReadmeFiles = getPackageFiles("README.md");

const getPackageJsonFiles = getPackageFiles("package.json");

const getTypeDocMarkdownFiles = () =>
	readDirectoryRecursive(TYPE_DOC_FILES_DIRECTORY);

const groupFilePaths = () =>
	Promise.all([
		getReadmeFiles(),
		getPackageJsonFiles(),
		getTypeDocMarkdownFiles(),
	]).then(([readmeFilePaths, packageFilePaths, typeDocFilePaths]) =>
		readmeFilePaths.map(
			readmeFilePath =>
				/** @type {const} */ ([
					readmeFilePath,
					packageFilePaths.find(packageFilePath =>
						packageFilePath.endsWith(
							`/${readmeFilePath
								.replace(`${PACKAGES_DIRECTORY}/`, "")
								.replace("/README.md", "/package.json")}`,
						),
					) ?? "",
					typeDocFilePaths.find(typeDocFilePath =>
						typeDocFilePath.endsWith(
							`/${readmeFilePath
								.replace(`${PACKAGES_DIRECTORY}/`, "")
								.replace("/README", "")
								.replace("@", "")
								.replace(/[-/]/gu, "_")}`,
						),
					) ?? "",
				]),
		),
	);

/** @param {string} path */
const readFileUTF8 = path =>
	readFile(path, { encoding: "utf-8" }).then(content => ({
		content,
		path,
	}));

const getGroupedFiles = () =>
	groupFilePaths().then(filePairs =>
		Promise.all(
			filePairs.map(
				([readmeFilePath, packageFilePath, typeDocFilePath]) =>
					Promise.all([
						readFileUTF8(readmeFilePath),
						readFileUTF8(packageFilePath).then(
							({ content }) =>
								/** @type {import("./package.json")} */ (
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									JSON.parse(content)
								),
						),
						readFileUTF8(typeDocFilePath),
					]),
			),
		),
	);

/**
 * @param {{
 * 	readonly description: string;
 * 	readonly title: string;
 * }} options
 */
const frontMatter = ({ description, title }) => `---
title: "${title}"
description: "${description}"
---`;

const formatPairedDocs = () =>
	getGroupedFiles().then(filePairs =>
		filePairs.map(
			([readmeFile, packageFile, typeDocFile]) =>
				/** @type {const} */ ([
					typeDocFile.path.replace(
						TYPE_DOC_FILES_DIRECTORY,
						ASTRO_TARGET,
					),
					`${frontMatter({
						description: packageFile.description,
						title: packageFile.name,
					})}\n\n${
						readmeFile.content
					}\n\n<!-- Start of auto-generated code by TypeDoc -->\n\n${typeDocFile.content
						.split("\n")
						.slice(2)
						.join("\n")
						.replaceAll(typeDocFile.path.split("/").at(-1), "")
						.replace(
							/#### Defined in\n\n\[.+\]\((?<path>.+)\)/gu,
							"> [View source]($1)",
						)}`,
				]),
		),
	);

const writeFormattedDocs = () =>
	mkdir(ASTRO_TARGET, { recursive: true })
		.then(() =>
			formatPairedDocs().then(formattedPairs =>
				Promise.all(
					formattedPairs.map(([path, content]) =>
						writeFile(path, content, { encoding: "utf-8" }),
					),
				),
			),
		)
		.then(() => "Docs written");

// eslint-disable-next-line functional/no-expression-statements, no-console
void writeFormattedDocs().then(console.log).catch(console.error);
