import type { Tests } from "@lou.codes/test";
import { groupBy } from "../../src/asynchronous/groupBy.js";

const string1 = "string1";
const string2 = "string2";
const stringArray = [string1, string2, string1, string2];
const numberArray = [0, 1, 2, 3];

export const groupByTests = [
	{
		given: "an array of strings and a grouper by string",
		must: "group by the string in the array",
		received: () => groupBy((groupName: string) => groupName)(stringArray),
		wanted: () => ({
			[string1]: [string1, string1],
			[string2]: [string2, string2],
		}),
	},
	{
		given: "an array of numbers and a grouper by even/odd",
		must: "group bu evens/odss",
		received: () =>
			groupBy((value: number) => (value % 2 === 0 ? "even" : "odd"))(
				numberArray,
			),
		wanted: () => ({ even: [0, 2], odd: [1, 3] }),
	},
] satisfies Tests;
