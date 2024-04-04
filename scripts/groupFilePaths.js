import { PACKAGES_DIRECTORY } from "./constants.js";
import { getPackageJsonFiles } from "./getPackageJsonFiles.js";
import { getReadmeFiles } from "./getReadmeFiles.js";
import { getTypeDocMarkdownFiles } from "./getTypeDocMarkdownFiles.js";

export const groupFilePaths = () =>
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
					typeDocFilePaths
						// Find all the files for this package
						.filter(typeDocFilePath =>
							typeDocFilePath.includes(
								readmeFilePath
									.replace(`${PACKAGES_DIRECTORY}/`, "")
									.replace("/README", "")
									.replace("@lou.codes", "lou_codes")
									.replaceAll(/[-/]/gu, "_")
									.replace(".md", ""),
							),
						)
						// Sort with the index first, the other modules later
						.sort(typeDocFilePath =>
							(
								typeDocFilePath.endsWith(
									readmeFilePath
										.replace(`${PACKAGES_DIRECTORY}/`, "")
										.replace("/README", "")
										.replace("@lou.codes", "lou_codes")
										.replaceAll(/[-/]/gu, "_"),
								)
							) ?
								-1
							:	1,
						),
				]),
		),
	);
