import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { unicodeCharacterClassEscape } from "../src/unicodeCharacterClassEscape.js";

export const unicodeCharacterClassEscapeTests = [
	{
		given: "a number 13",
		must: "add a the unicode character class escape around it",
		received: () => unicodeCharacterClassEscape(13),
		wanted: () => raw`\p{13}`,
	},
] satisfies Tests<string>;
