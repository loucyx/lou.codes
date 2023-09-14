import { rename } from "node:fs/promises";
import { createURL } from "./createURL.js";
import { targetURL } from "./targetURL.js";

export const gitIgnoreFix = (name: string) => {
	const createURLPath = createURL(targetURL(`${name}/`));

	return () =>
		rename(createURLPath("_gitignore"), createURLPath(".gitignore"));
};
