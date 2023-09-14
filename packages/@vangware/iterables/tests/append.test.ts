import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { append } from "../src/append.js";
import { iterableToArray } from "../src/iterableToArray.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const appendNumbers = append([0, 1, 2, 3, 4]);

export default [
	{
		given: "an array of numbers an array of strings",
		must: "return both arrays concatenated",
		received: () => iterableToArray(appendNumbers(["foo", "bar"])),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4],
	},
	{
		given: "an array of numbers we'll append twice an array of strings",
		must: "return all arrays concatenated",
		received: () =>
			iterableToArray(appendNumbers(appendNumbers(["foo", "bar"]))),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
	},
	{
		given: "an array of numbers an iterable of strings",
		must: "return both arrays concatenated",
		received: () =>
			iterableToArray(appendNumbers(iterateArray(["foo", "bar"]))),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4],
	},
	{
		given: "an array of numbers an async iterable of strings",
		must: "return both arrays concatenated",
		received: () =>
			iterableToArray(appendNumbers(asyncIterateArray(["foo", "bar"]))),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4],
	},
] satisfies Tests<ReadOnlyArray<number | string>>;
