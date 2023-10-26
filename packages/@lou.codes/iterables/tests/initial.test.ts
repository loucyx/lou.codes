import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { drop } from "../src/drop.js";
import { initial } from "../src/initial.js";
import { iterableToArray } from "../src/iterableToArray.js";
import { range } from "../src/range.js";
import { asyncIterateArray } from "./utils.js";

const array = [0, 1, 2];

export default [
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
	{
		given: "an async iterable",
		must: "return initial items",
		received: () => iterableToArray(initial(asyncIterateArray([0, 1, 2]))),
		wanted: () => [0, 1],
	},
] satisfies Tests<ReadOnlyArray<number>>;
