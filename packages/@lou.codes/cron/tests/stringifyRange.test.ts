import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { stringifyRange } from "../src/stringifyRange.js";

export const stringifyRangeTests = [
	{
		given: "a range",
		must: "return stringified range",
		received: () => stringifyRange({ from: 10, to: 13 }),
		wanted: () => "10-13",
	},
	{
		given: "an invalid value",
		must: "return undefined",
		received: () => stringifyRange("nope" as "*"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<string>>;
