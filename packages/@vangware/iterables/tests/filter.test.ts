import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { filter } from "../src/filter.js";
import { iterableToArray } from "../src/iterableToArray.js";

const array = [0, 1, 2, 3];
const nothing = (_: unknown) => false;
const filterEverything = filter(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterOdds = filter(isEven);

export default [
	{
		given: "an array of numbers and an always false filter",
		must: "return an empty array",
		received: () => iterableToArray(filterEverything(array)),
		wanted: () => [],
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only even numbers",
		received: () => iterableToArray(filterOdds(array)),
		wanted: () => [0, 2],
	},
	{
		given: "an async array of numbers and an always false filter",
		must: "return an empty iterable",
		received: () => iterableToArray(filterEverything(array)),
		wanted: () => [],
	},
	{
		given: "an async array of numbers and an even number filter",
		must: "return only even numbers",
		received: () => iterableToArray(filterOdds(array)),
		wanted: () => [0, 2],
	},
] satisfies Tests<ReadOnlyArray<number>>;
