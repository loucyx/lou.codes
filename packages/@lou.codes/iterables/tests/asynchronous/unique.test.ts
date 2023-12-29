import type { Tests } from "@lou.codes/test";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { unique } from "../../src/asynchronous/unique.js";

const array = [0, 1, 2, 3, 4];

export const uniqueTests = [
	{
		given: "an array with duplicated elements",
		must: "return same array without duplicated elements",
		received: () => iterableToArray(unique([...array, ...array])),
		wanted: () => array,
	},
	{
		given: "an array without duplicated elements",
		must: "return same array",
		received: () => iterableToArray(unique(array)),
		wanted: () => array,
	},
	{
		given: "an empty array",
		must: "return same array",
		received: () => iterableToArray(unique([])),
		wanted: () => [],
	},
] satisfies Tests<ReadonlyArray<number>>;
