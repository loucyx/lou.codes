import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { capturedNumber } from "../src/capturedNumber.js";

export const capturedNumberTests = [
	{
		given: "a number 13",
		must: "add an escape sequence to the left",
		received: () => capturedNumber(13),
		wanted: () => raw`\13`,
	},
] satisfies Tests<string>;
