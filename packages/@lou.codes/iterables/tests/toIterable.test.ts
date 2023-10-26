import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { toIterable } from "../src/toIterable.js";
import { asyncIterateArray } from "./utils.js";

export default [
	{
		given: "an array",
		must: "return iterable of array",
		received: () => iterableToArray(toIterable([0, 1, 2, 3, 4])),
		wanted: () => [0, 1, 2, 3, 4],
	},
	{
		given: "a string",
		must: "return iterable of string",
		received: () => typeof toIterable("test")[Symbol.iterator],
		wanted: () => "function",
	},
	{
		given: "a number",
		must: "return iterable of number",
		received: () => iterableToArray(toIterable(1)),
		wanted: () => [1],
	},
	{
		given: "an async iterable",
		must: "return async iterable",
		received: () =>
			iterableToArray(toIterable(asyncIterateArray([0, 1, 2, 3, 4]))),
		wanted: () => [0, 1, 2, 3, 4],
	},
] satisfies Tests<ReadOnlyArray<number> | string>;
