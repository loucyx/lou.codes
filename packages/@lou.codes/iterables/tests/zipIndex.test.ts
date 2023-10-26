import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { repeat } from "../src/repeat.js";
import { zipIndex } from "../src/zipIndex.js";

export default [
	{
		given: "an array with two strings",
		must: "return Iterable of tuples with indexes and strings",
		received: () => iterableToArray(zipIndex(["foo", "bar"])),
		wanted: () => [
			[0, "foo"],
			[1, "bar"],
		],
	},
	{
		given: "an empty array",
		must: "Empty iterable",
		received: () => iterableToArray(zipIndex([])),
		wanted: () => [],
	},
	{
		given: "an iterable of strings",
		must: "return Iterable of tuples with indexes and strings",
		received: () => iterableToArray(zipIndex(repeat(2)("foo"))),
		wanted: () => [
			[0, "foo"],
			[1, "foo"],
		],
	},
] satisfies Tests<ReadOnlyArray<readonly [number, unknown]>>;
