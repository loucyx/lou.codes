import type { Tests } from "@lou.codes/test";
import { rangeStringMatch } from "../src/rangeStringMatch.js";

export const rangeStringMatchTests = [
	{
		given: "a range string",
		must: "return true",
		received: () => rangeStringMatch("10-13"),
		wanted: () => true,
	},
	{
		given: "an invalid range string",
		must: "return false",
		received: () => rangeStringMatch("nope"),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
