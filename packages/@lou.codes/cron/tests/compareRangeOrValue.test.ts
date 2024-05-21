import type { Tests } from "@lou.codes/test";
import { compareRangeOrValue } from "../src/compareRangeOrValue.js";

export const compareRangeOrValueTests = [
	{
		given: "Two equal values",
		must: "return true",
		received: () => compareRangeOrValue(13)(13),
		wanted: () => true,
	},
	{
		given: "Two different values",
		must: "return false",
		received: () => compareRangeOrValue(13)(99),
		wanted: () => false,
	},
	{
		given: "Value and a range that contains it",
		must: "return true",
		received: () => compareRangeOrValue(13)({ from: 0, to: 99 }),
		wanted: () => true,
	},
	{
		given: "Value and a range that doesn't contain it",
		must: "return true",
		received: () => compareRangeOrValue(13)({ from: 0, to: 10 }),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
