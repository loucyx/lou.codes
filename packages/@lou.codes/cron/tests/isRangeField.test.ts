import type { Tests } from "@lou.codes/test";
import { isRangeField } from "../src/isRangeField.js";

export const isRangeFieldTests = [
	{
		given: "a string that is a *",
		must: "return false",
		received: () => isRangeField("*"),
		wanted: () => false,
	},
	{
		given: "an array of numbers",
		must: "return true",
		received: () => isRangeField([1, 2, 3]),
		wanted: () => false,
	},
	{
		given: "a range",
		must: "return true",
		received: () => isRangeField({ from: 3, to: 5 }),
		wanted: () => true,
	},
	{
		given: "a range with inverted from and to",
		must: "return false",
		received: () => isRangeField({ from: 5, to: 3 }),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
