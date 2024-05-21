import type { Tests } from "@lou.codes/test";
import { isNumberString } from "../src/isNumberString.js";

export const isNumberStringTests = [
	{
		given: "a string that is a *",
		must: "return false",
		received: () => isNumberString("*"),
		wanted: () => false,
	},
	{
		given: "a valid number",
		must: "return true",
		received: () => isNumberString("13"),
		wanted: () => true,
	},
] satisfies Tests<boolean>;
