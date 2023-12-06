import { readdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * @param {string} directory
 */
export const readDirectoryRecursive = directory =>
	readdir(directory, { recursive: true }).then(files =>
		files.map(file => join(directory, file)),
	);
