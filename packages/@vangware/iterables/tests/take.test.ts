import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { take } from "../src/take.js";
import { asyncIterateArray, infiniteIterable } from "./utils.js";

const take2 = take(2);
const takeNone = take(0);
const takeAll = take(Infinity);

export default [
	{
		given: "an array of numbers and a take 2 function",
		must: "return array with only the first 2 elements",
		received: () => iterableToArray(take2([0, 1, 2, 3, 4])),
		wanted: () => [0, 1],
	},
	{
		given: "an array of numbers and a take 0 function",
		must: "return an empty array",
		received: () => iterableToArray(takeNone([0, 1, 2, 3, 4])),
		wanted: () => [],
	},
	{
		given: "an array of numbers and a take all function",
		must: "return the whole array",
		received: () => iterableToArray(takeAll([0, 1, 2, 3, 4])),
		wanted: () => [0, 1, 2, 3, 4],
	},
	{
		given: "an async iterable of numbers and a take 2 function",
		must: "return async iterable with only the first 2 elements",
		received: () =>
			iterableToArray(take2(asyncIterateArray([0, 1, 2, 3, 4]))),
		wanted: () => [0, 1],
	},
	{
		given: "an async iterable of numbers and a take 0 function",
		must: "return an empty async iterable",
		received: () =>
			iterableToArray(takeNone(asyncIterateArray([0, 1, 2, 3, 4]))),
		wanted: () => [],
	},
	{
		given: "an async iterable of numbers and a take all function",
		must: "return the whole async iterable",
		received: () =>
			iterableToArray(takeAll(asyncIterateArray([0, 1, 2, 3, 4]))),
		wanted: () => [0, 1, 2, 3, 4],
	},
	{
		given: "an iterable of infinite values and a take(2)",
		must: "return a 2 items without hanging",
		received: () => iterableToArray(take2(infiniteIterable(0))),
		wanted: () => [0, 0],
	},
	{
		given: "an iterable of infinite values and a take(0)",
		must: "return a no items without hanging",
		received: () => iterableToArray(takeNone(infiniteIterable(0))),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<number>>;
