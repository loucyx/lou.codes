import type { Tests } from "@vangware/test";
import { getIterator } from "../src/getIterator.js";
import { asyncIterateArray } from "./utils.js";

const array = [0, 1, 2] as const;
const asyncArray = asyncIterateArray(array);

export default [
	{
		given: "an array",
		must: "return array's iterator",
		received: () => getIterator(array),
		wanted: () => array[Symbol.iterator](),
	},
	{
		given: "an async iterable array",
		must: "return array's async iterator",
		received: () => getIterator(asyncArray),
		wanted: () => asyncArray[Symbol.asyncIterator](),
	},
] satisfies Tests;
