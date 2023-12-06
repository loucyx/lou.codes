import { PACKAGES_DIRECTORY } from "./constants.js";
import { readDirectoryRecursive } from "./readDirectoryRecursive.js";

/**
 * @param {string} filename
 */
export const getPackageFiles = filename => () =>
	readDirectoryRecursive(PACKAGES_DIRECTORY).then(files =>
		files.filter(
			file => !file.includes("node_modules") && file.endsWith(filename),
		),
	);
