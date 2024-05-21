import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import type { RangeField } from "../src/RangeField.js";
import { parseRange } from "../src/parseRange.js";

export const parseRangeTests = [
	{
		given: "a number 10 and a 13",
		must: "return parsed values",
		received: () => parseRange("1-13"),
		wanted: () => ({ from: 1, to: 13 }),
	},
] satisfies Tests<Maybe<RangeField<number>>>;
