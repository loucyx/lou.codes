import type { Tests } from "@lou.codes/test";
import { isListString } from "../src/isListString.js";

export const isListStringTests = [
	{
		given: "a string that is a *",
		must: "return false",
		received: () => isListString("*"),
		wanted: () => false,
	},
	{
		given: "an array of numbers",
		must: "return true",
		received: () => isListString("1,2,3"),
		wanted: () => true,
	},
	{
		given: "an array of numbers and ranges",
		must: "return true",
		received: () => isListString("1,2,3-5"),
		wanted: () => true,
	},
] satisfies Tests<boolean>;
