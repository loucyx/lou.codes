import {} from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { parseNumber } from "../src/parseNumber.js";

export const parseDecimalMapTests = [
	{
		given: "a number 10 and a 13",
		must: "return parsed values",
		received: () => parseNumber("13"),
		wanted: () => 13,
	},
	{
		given: "ranges with padding zeroes",
		must: "return parsed values",
		received: () => parseNumber("05"),
		wanted: () => 5,
	},
	{
		given: "numbers beyond 59",
		must: "return undefined",
		received: () => parseNumber("60"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
