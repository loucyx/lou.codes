import { readFile } from "node:fs/promises";

/** @param {string} path */
export const readFileUTF8 = path =>
	readFile(path, { encoding: "utf8" })
		.then(content => ({
			content,
			path,
		}))
		.catch(() => Promise.reject({ path }));
