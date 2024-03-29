import { ASTRO_TARGET, TYPE_DOC_FILES_DIRECTORY } from "./constants.js";
import { frontMatter } from "./frontMatter.js";
import { getGroupedFiles } from "./getGroupedFiles.js";

export const formatPairedDocs = () =>
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
						.replaceAll(
							typeDocFile.path.split("/").at(-1) ?? "",
							"",
						)
						.replaceAll(
							/#### Defined in\n\n\[.+\]\((?<path>.+)\)/gu,
							"> [View source]($1)",
						)}`
						// FIXME: TypeDoc is messing some resolutions, this fixes it™️.
						// Remove it once is fixed in TypeDoc.
						.replaceAll(
							/#### Defined in\n\nnode_modules\/(?<packageName>@lou\.codes\/.+)\/dist\/(?<filename>.+)\.d\.ts:\d+/gu,
							"> [View source](https://github.com/loucyx/lou.codes/blob/main/packages/$1/src/$2.ts)",
						)
						.replaceAll(
							/#### Defined in\npackages\/(?<sourcePackageName>@lou\.codes\/.+)\/node_modules\/(?<packageName>@lou\.codes\/.+)\/dist\/(?<filename>.+)\.d\.ts:\d+/gu,
							"> [View source](https://github.com/loucyx/lou.codes/blob/main/packages/$1/src/$2.ts)",
						)
						.replaceAll("https://lou.codes/", "/")
						.replaceAll("https://lou.codes", "/")
						.replaceAll(
							/(?<optionalPropertyEnd>\?`)(?<spaces> +\|)/gu,
							" (optional)`$2",
						)
						.replaceAll(
							/(?<symbol>▸|Ƭ) (?<code>[^\n]*(?:\n[^\n]+)*)\n\n/gu,
							`<div class="font-mono text-sm">\n\n$1 $2\n\n</div>\n\n`,
						),
				]),
		),
	);
