import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { flat } from "../../src/asynchronous/flat.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";

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
] satisfies Tests<ReadOnlyArray<ReadOnlyArray<number> | number>>;
