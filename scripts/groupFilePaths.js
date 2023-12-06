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
					typeDocFilePaths.find(typeDocFilePath =>
						typeDocFilePath.endsWith(
							`/${readmeFilePath
								.replace(`${PACKAGES_DIRECTORY}/`, "")
								.replace("/README", "")
								.replace("@lou.codes", "lou_codes")
								.replace(/[-/]/gu, "_")}`,
						),
					) ?? "",
				]),
		),
	);
