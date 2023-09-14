import { pathToString } from "./pathToString.js";
import type { Path } from "./types/Path.js";

export const pathToURL = (path: Path) =>
	new URL(typeof path === "string" ? pathToString(path) : (path as URL));
