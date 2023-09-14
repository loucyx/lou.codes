import { mkdir } from "node:fs/promises";
import { pathToString } from "./pathToString.js";
import type { Path } from "./types/Path.js";

export const createDirectory = (name: Path) =>
	mkdir(pathToString(name), { recursive: true });
