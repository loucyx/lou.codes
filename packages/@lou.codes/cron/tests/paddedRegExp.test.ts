import type { Tests } from "@lou.codes/test";
import { paddedRegExp } from "../src/paddedRegExp.js";

export const paddedRegExpTests = [
	{
		given: "a number 5",
		must: "return number with padded 0?",
		received: () => paddedRegExp(5),
		wanted: () => "0?5",
	},
] satisfies Tests<string>;
