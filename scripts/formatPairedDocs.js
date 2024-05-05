import { ASTRO_TARGET, TYPE_DOC_FILES_DIRECTORY } from "./constants.js";
import { frontMatter } from "./frontMatter.js";
import { getGroupedFiles } from "./getGroupedFiles.js";
import { incrementHeadingLevels } from "./incrementHeadingLevels.js";

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
						isModule: moduleTypeDocFiles.length > 0,
						title: packageFile.name,
					})}\n\n${
						readmeFile.content
					}\n\n<!-- Start of auto-generated code by TypeDoc -->\n\n${[
						typeDocFile.content,
						...moduleTypeDocFiles.map(moduleTypeDocFile =>
							incrementHeadingLevels(moduleTypeDocFile.content),
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
							/#####? Source\n\n\[.+\]\((?<path>.+)\)/gu,
							"> [View source]($1)",
						)}`
						// Make absolute references to the site relative
						.replaceAll("https://lou.codes/", "/")
						.replaceAll("https://lou.codes", "/")
						// Remove modules and namespaces links because we are inlining them
						.replaceAll(
							/## (?:Modules|Namespaces)\n\n-(?<moduleLink>.+\n)+/gu,
							"",
						)
						// Files are inlined, let's remove this reference to a non-existing globals.md
						.replaceAll(
							new RegExp(
								`${packageFile.name.replace(".", "\\.")}\\/globals.md#`,
								"gu",
							),
							`#`,
						),
				]);
			},
		),
	);
