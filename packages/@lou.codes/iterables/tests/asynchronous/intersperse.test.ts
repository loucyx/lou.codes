import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { intersperse } from "../../src/asynchronous/intersperse.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { range } from "../../src/asynchronous/range.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const commaIntersperse = intersperse(",");

export const intersperseTests = [
	{
		given: "an array",
		must: "return interspersed items",
		received: () => iterableToArray(commaIntersperse([0, 1, 2])),
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
		received: () => iterableToArray(commaIntersperse(toIterable([]))),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<number | string>>;
