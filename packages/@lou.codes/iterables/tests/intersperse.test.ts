import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { intersperse } from "../src/intersperse.js";
import { iterableToArray } from "../src/iterableToArray.js";
import { range } from "../src/range.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const array = [0, 1, 2];
const commaIntersperse = intersperse(",");

export const intersperseTests = [
	{
		given: "an array",
		must: "return interspersed items",
		received: () => iterableToArray(commaIntersperse(array)),
		wanted: () => [0, ",", 1, ",", 2],
	},
	{
		given: "an iterable",
		must: "return interspersed items",
		received: () => iterableToArray(commaIntersperse(range(1)(0)(2))),
		wanted: () => [0, ",", 1, ",", 2],
	},
	{
		given: "an empty array",
		must: "return empty iterable",
		received: () => iterableToArray(commaIntersperse([])),
		wanted: () => [],
	},
	{
		given: "an empty iterable",
		must: "return empty iterable",
		received: () => iterableToArray(commaIntersperse(iterateArray([]))),
		wanted: () => [],
	},
	{
		given: "an empty async iterable",
		must: "return empty iterable",
		received: () =>
			iterableToArray(commaIntersperse(asyncIterateArray([]))),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<number | string>>;
