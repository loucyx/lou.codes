import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { drop } from "../../src/asynchronous/drop.js";
import { initial } from "../../src/asynchronous/initial.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { range } from "../../src/asynchronous/range.js";

const array = [0, 1, 2];

export const initialTests = [
	{
		given: "an array",
		must: "return initial items",
		received: () => iterableToArray(initial(array)),
		wanted: () => [0, 1],
	},
	{
		given: "an iterable",
		must: "return initial items",
		received: () => iterableToArray(initial(range(1)(0)(2))),
		wanted: () => [0, 1],
	},
	{
		given: "an empty array",
		must: "return empty array",
		received: () => iterableToArray(initial([])),
		wanted: () => [],
	},
	{
		given: "an empty iterable",
		must: "return empty array",
		received: () => iterableToArray(initial(drop(Infinity)(array))),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<number>>;
