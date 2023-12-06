import { TYPE_DOC_FILES_DIRECTORY } from "./constants.js";
import { readDirectoryRecursive } from "./readDirectoryRecursive.js";

export const getTypeDocMarkdownFiles = () =>
	readDirectoryRecursive(TYPE_DOC_FILES_DIRECTORY);
