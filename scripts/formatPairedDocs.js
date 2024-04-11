import { ASTRO_TARGET, TYPE_DOC_FILES_DIRECTORY } from "./constants.js";
import { frontMatter } from "./frontMatter.js";
import { getGroupedFiles } from "./getGroupedFiles.js";

export const formatPairedDocs = () =>
	getGroupedFiles().then(filePairs =>
		filePairs.map(
			([
				readmeFile,
				packageFile,
				[typeDocFile, ...moduleTypeDocFiles],
			]) => {
				const { groups: { moduleName = "", packageName = "" } = {} } =
					typeDocFile.path.match(
						/\/(?<packageName>[^/\\]+)\.(?<moduleName>[^/\\]+)\.md/u,
					) ?? {};
				const isModule = moduleName !== "";

				return /** @type {const} */ ([
					typeDocFile.path
						.replace(TYPE_DOC_FILES_DIRECTORY, ASTRO_TARGET)
						.replace(
							`/${packageName}.${moduleName}.md`,
							`/${packageName}/${moduleName}.md`,
						)
						.toLocaleLowerCase(),
					`${frontMatter({
						description: packageFile.description,
						title:
							isModule ?
								`${packageFile.name} (${moduleName})`
							:	packageFile.name,
					})}\n\n${
						isModule ? "" : readmeFile.content
					}\n\n<!-- Start of auto-generated code by TypeDoc -->\n\n${[
						typeDocFile.content,
						...moduleTypeDocFiles
							.filter(
								moduleTypeDocFile =>
									!moduleTypeDocFile.content.startsWith(
										"# Namespace:",
									),
							)
							.map(
								moduleTypeDocFile => moduleTypeDocFile.content,
							),
					]
						.join("\n")
						.split("\n")
						.slice(2)
						.join("\n")
						// Make all references to the TypeDoc file relative
						.replaceAll(
							typeDocFile.path.split("/").at(-1) ?? "",
							"",
						)
						// Make the "defined in" nicer.
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
						// Make absolute references to the site relative
						.replaceAll("https://lou.codes/", "/")
						.replaceAll("https://lou.codes", "/")
						// Turn all question marks next to properties into " (optional)"
						.replaceAll(
							/(?<optionalPropertyEnd>\?`)(?<spaces> +\|)/gu,
							" (optional)`$2",
						)
						// Make function headers nicer
						.replaceAll(
							/(?<symbol>▸|Ƭ) (?<code>[^\n]*(?:\n[^\n]+)*)\n\n/gu,
							`<div class="font-mono text-sm">\n\n$1 $2\n\n</div>\n\n`,
						)
						// Remove modules links because we are inlining them
						.replaceAll(
							/## Modules\n\n-(?<moduleLink>.+\n)+\n/gu,
							"",
						)
						// Remove module title/description
						.replaceAll(/(?<moduleTitle># Module:.+\n)\n.+/gu, "")
						// Remove namespaces list
						.replaceAll(/## Namespaces(?:\n+-.+\n+)+## /gu, "## "),
				]);
			},
		),
	);
