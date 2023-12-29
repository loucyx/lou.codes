import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { map } from "../../src/asynchronous/map.js";
import { range } from "../../src/asynchronous/range.js";

const mapDouble = map((value: number) => value * 2);
const arrayDouble = mapDouble([0, 1, 2, 3]);

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
] satisfies Tests<ReadOnlyArray<number>>;
