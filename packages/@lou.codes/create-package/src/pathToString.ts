import { fileURLToPath } from "node:url";
import type { Path } from "./types/Path.js";

export const pathToString = (path: Path) =>
	typeof path === "string" ? path : fileURLToPath(path as URL);
