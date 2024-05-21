import type { Tests } from "@lou.codes/test";
import { isListField } from "../src/isListField.js";

export const isListFieldTests = [
	{
		given: "a string that is a *",
		must: "return false",
		received: () => isListField("*"),
		wanted: () => false,
	},
	{
		given: "an array of numbers",
		must: "return true",
		received: () => isListField([1, 2, 3]),
		wanted: () => true,
	},
	{
		given: "an array of numbers and ranges",
		must: "return true",
		received: () => isListField([1, 2, { from: 3, to: 5 }]),
		wanted: () => true,
	},
] satisfies Tests<boolean>;
