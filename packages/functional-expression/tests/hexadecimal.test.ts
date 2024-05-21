import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { hexadecimal } from "../src/hexadecimal.js";

export const hexadecimalTests = [
	{
		given: "a number 13 in hexadecimal",
		must: "add a x escape sequence to the left",
		received: () => hexadecimal("0D"),
		// eslint-disable-next-line unicorn/no-hex-escape
		wanted: () => raw`\x0D`,
	},
] satisfies Tests<string>;
