import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { map } from "../src/map.js";
import { range } from "../src/range.js";
import { asyncIterateArray } from "./utils.js";

const array = [0, 1, 2, 3];
const mapDouble = map((value: number) => value * 2);
const arrayDouble = mapDouble(array);

export const mapTests = [
	{
		given: "an array of numbers and a map that doubles",
		must: "get an array with all values times 2",
		received: () => iterableToArray(arrayDouble),
		wanted: () => [0, 2, 4, 6],
	},
	{
		given: "an array of doubles and a map that doubles",
		must: "get an array with all values times 4",
		received: () => iterableToArray(mapDouble(arrayDouble)),
		wanted: () => [0, 4, 8, 12],
	},
	{
		given: "an iterable of numbers and a map that doubles",
		must: "get an array with all values times 2",
		received: () => iterableToArray(mapDouble(range(1)(0)(3))),
		wanted: () => [0, 2, 4, 6],
	},
	{
		given: "an async iterable of numbers and a map that doubles",
		must: "get an async iterable with all values duplicated",
		received: () => iterableToArray(mapDouble(asyncIterateArray(array))),
		wanted: () => [0, 2, 4, 6],
	},
] satisfies Tests<ReadOnlyArray<number>>;
