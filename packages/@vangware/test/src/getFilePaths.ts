import { readdir, stat } from "node:fs/promises";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";

/**
 * Recursively search for files in the given directory and yields every file. If
 * a file path is passed initially, that file is shielded directly.
 *
 * @category File System
 * @example
 * ```typescript
 * getFiles("./tests/"); // ["./tests/vangware.test.ts"]
 * ```
 * @param fileOrDirectory Directory to get files from.
 * @yields Files recursively found in the given directory.
 */
export const getFilePaths = async function* (
	fileOrDirectory: ReadOnlyURL,
): AsyncGenerator<ReadOnlyURL, void> {
	const fileOrDirectoryURL = new URL(fileOrDirectory.href);

	// eslint-disable-next-line functional/no-conditional-statements
	if ((await stat(fileOrDirectoryURL)).isDirectory()) {
		// eslint-disable-next-line functional/no-loop-statements
		for (const dirent of await readdir(fileOrDirectoryURL, {
			withFileTypes: true,
		})) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			dirent.isDirectory()
				? yield* getFilePaths(
						new URL(`${dirent.name}/`, fileOrDirectoryURL),
				  )
				: yield new URL(dirent.name, fileOrDirectoryURL);
		}
		// eslint-disable-next-line functional/no-conditional-statements
	} else {
		yield fileOrDirectory;
	}
};
