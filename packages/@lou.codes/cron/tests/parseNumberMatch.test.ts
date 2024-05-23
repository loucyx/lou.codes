import {} from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import { parseNumberMatch } from "../src/parseNumberMatch.js";

export const parseDecimalMapTests = [
	{
		given: "a number 10 and a 13",
		must: "return true",
		received: () => parseNumberMatch("13"),
		wanted: () => true,
	},
	{
		given: "ranges with padding zeroes",
		must: "return true",
		received: () => parseNumberMatch("05"),
		wanted: () => true,
	},
	{
		given: "numbers beyond 59",
		must: "return false",
		received: () => parseNumberMatch("60"),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
