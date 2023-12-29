import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { filter } from "../../src/asynchronous/filter.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const array = toIterable([0, 1, 2, 3]);
const nothing = (_: unknown) => false;
const filterEverything = filter(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterOdds = filter(isEven);

export const filterTests = [
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
] satisfies Tests<ReadOnlyArray<number>>;
