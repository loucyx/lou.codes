import { pathToString } from "./pathToString.js";
import { pathToURL } from "./pathToURL.js";
import type { Path } from "./types/Path.js";

export const createURL = (base: Path) => (path: Path) =>
	new URL(pathToString(path), pathToURL(base));
