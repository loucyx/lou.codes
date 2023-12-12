import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { range } from "../src/range.js";

export const iterableToArrayTests = [
	{
		given: "a string",
		must: "return an array with every letter of that string",
		received: () => iterableToArray("Lou"),
		wanted: () => [..."Lou"],
	},
	{
		given: "an array",
		must: "return that same array",
		received: () => iterableToArray(["🟢", "🟩"]),
		wanted: () => ["🟢", "🟩"],
	},
	{
		given: "a generator",
		must: "return an array with generated values",
		received: () => iterableToArray(range(1)(0)(10)),
		wanted: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	},
] satisfies Tests<ReadOnlyArray>;
