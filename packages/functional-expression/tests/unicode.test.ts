import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { unicode } from "../src/unicode.js";

export const unicodeTests = [
	{
		given: "a number 13",
		must: "add a the unicode escape around it",
		received: () => unicode(13),
		wanted: () => raw`\u{13}`,
	},
] satisfies Tests<string>;
