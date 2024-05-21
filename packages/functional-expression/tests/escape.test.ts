import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { escape } from "../src/escape.js";

export const escapeTests = [
	{
		given: "a letter L",
		must: "escape it",
		received: () => escape("L"),
		wanted: () => raw`\L`,
	},
] satisfies Tests<string>;
