import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import type { RangeField } from "../src/RangeField.js";
import { parseRange } from "../src/parseRange.js";

export const parseRangeTests = [
	{
		given: "a number 1 and a 13",
		must: "return parsed values",
		received: () => parseRange("1-13"),
		wanted: () => ({ from: 1, to: 13 }),
	},
	{
		given: "a number 13 and a 13",
		must: "return normalized 13",
		received: () => parseRange("13-13"),
		wanted: () => 13,
	},
	{
		given: "a number 13 and a 1",
		must: "return parsed undefined",
		received: () => parseRange("13-1"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<RangeField<number> | number>>;
