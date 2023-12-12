import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { flat } from "../src/flat.js";
import { iterableToArray } from "../src/iterableToArray.js";
import { asyncIterateArray } from "./utils.js";

const array = [0, 1, 2, 3];
const arrayOfArrays = [
	[0, 1],
	[2, 3],
];
const arrayDeeper = [arrayOfArrays, arrayOfArrays];

export const flatTests = [
	{
		given: "an array that already is flat",
		must: "return the same array",
		received: () => iterableToArray(flat(array)),
		wanted: () => array,
	},
	{
		given: "an array of arrays and a depth of 1",
		must: "return a flattened array",
		received: () => iterableToArray(flat(arrayOfArrays)),
		wanted: () => [0, 1, 2, 3],
	},
	{
		given: "an array arrays of arrays and a depth of 1",
		must: "return an array of arrays",
		received: () => iterableToArray(flat(arrayDeeper)),
		wanted: () => [
			[0, 1],
			[2, 3],
			[0, 1],
			[2, 3],
		],
	},
	{
		given: "an async iterable that already is flat",
		must: "return the same iterable",
		received: () => iterableToArray(flat(asyncIterateArray(array))),
		wanted: () => array,
	},
	{
		given: "an async iterable of arrays and a depth of 1",
		must: "return a flattened iterable",
		received: () =>
			iterableToArray(
				flat(asyncIterateArray(arrayOfArrays.map(asyncIterateArray))),
			),
		wanted: () => [0, 1, 2, 3],
	},
	{
		given: "an async iterable of arrays and a depth of 1",
		must: "return an iterable of arrays",
		received: () => iterableToArray(flat(asyncIterateArray(arrayDeeper))),
		wanted: () => [
			[0, 1],
			[2, 3],
			[0, 1],
			[2, 3],
		],
	},
] satisfies Tests<ReadOnlyArray<ReadOnlyArray<number> | number>>;
