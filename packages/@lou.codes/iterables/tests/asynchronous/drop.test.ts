import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { drop } from "../../src/asynchronous/drop.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const drop2 = drop(2);
const dropNone = drop(0);
const dropAll = drop(Infinity);

export const dropTests = [
	{
		given: "an iterable of numbers and a drop 2 function",
		must: "return iterable without the first 2 elements",
		received: () => iterableToArray(drop2(toIterable([0, 1, 2, 3, 4]))),
		wanted: () => [2, 3, 4],
	},
	{
		given: "an iterable of numbers and a drop 0 function",
		must: "return iterable with all its elements",
		received: () => iterableToArray(dropNone(toIterable([0, 1, 2, 3, 4]))),
		wanted: () => [0, 1, 2, 3, 4],
	},
	{
		given: "an iterable of numbers and a drop all function",
		must: "return empty iterable",
		received: () => iterableToArray(dropAll(toIterable([0, 1, 2, 3, 4]))),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<number>>;
