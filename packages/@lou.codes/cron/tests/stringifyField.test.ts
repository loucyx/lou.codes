import type { Tests } from "@lou.codes/test";
import { stringifyField } from "../src/stringifyField.js";

export const stringifyFieldTests = [
	{
		given: "an array of numbers",
		must: "return stringified list",
		received: () => stringifyField([10, 13]),
		wanted: () => "10,13",
	},
	{
		given: "a range",
		must: "return stringified range",
		received: () => stringifyField({ from: 10, to: 13 }),
		wanted: () => "10-13",
	},
] satisfies Tests<string>;
