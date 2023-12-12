import type { Tests } from "@lou.codes/test";
import { length } from "../src/length.js";
import { range } from "../src/range.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const array = [0, 1, 2];

export const lengthTests = [
	{
		given: "an array",
		must: "return length",
		received: () => length(array),
		wanted: () => 3,
	},
	{
		given: "an iterable",
		must: "return length",
		received: () => length(range(1)(0)(2)),
		wanted: () => 3,
	},
	{
		given: "an empty array",
		must: "return 0",
		received: () => length([]),
		wanted: () => 0,
	},
	{
		given: "an empty iterable",
		must: "return 0",
		received: () => length(iterateArray([])),
		wanted: () => 0,
	},
	{
		given: "an empty async iterable",
		must: "return 0",
		received: () => length(asyncIterateArray([])),
		wanted: () => 0,
	},
] satisfies Tests<number>;
