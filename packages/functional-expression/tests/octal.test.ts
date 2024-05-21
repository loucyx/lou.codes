import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { octal } from "../src/octal.js";

export const octalTests = [
	{
		given: "a number 13 in octal",
		must: "add a x escape sequence to the left",
		received: () => octal("015"),
		// eslint-disable-next-line unicorn/no-hex-escape
		wanted: () => raw`\015`,
	},
] satisfies Tests<string>;
