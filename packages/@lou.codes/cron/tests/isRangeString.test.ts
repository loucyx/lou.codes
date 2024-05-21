import type { Tests } from "@lou.codes/test";
import { isRangeString } from "../src/isRangeString.js";

export const isRangeStringTests = [
	{
		given: "a string that is a *",
		must: "return false",
		received: () => isRangeString("*"),
		wanted: () => false,
	},
	{
		given: "an array of numbers",
		must: "return true",
		received: () => isRangeString("1,2,3"),
		wanted: () => false,
	},
	{
		given: "a range",
		must: "return true",
		received: () => isRangeString("3-5"),
		wanted: () => true,
	},
	{
		given: "a range with inverted from and to",
		must: "return false",
		received: () => isRangeString("5-3"),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
