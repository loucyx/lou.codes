import { rename } from "node:fs/promises";
import { TYPE_DOC_FILES_DIRECTORY } from "./constants.js";
import { readDirectoryRecursive } from "./readDirectoryRecursive.js";

export const getTypeDocMarkdownFiles = () =>
	readDirectoryRecursive(TYPE_DOC_FILES_DIRECTORY)
		// FIXME: This is a lazy rename so it matches the previous typedoc-markdown
		.then(paths =>
			Promise.all(
				paths.map(path => {
					const fixedPath = path
						.replace("@lou.codes.", "lou_codes_")
						.replaceAll("-", "_");

					return rename(path, fixedPath).then(() => fixedPath);
				}),
			),
		);
