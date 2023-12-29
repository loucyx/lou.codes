import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { append } from "../../src/asynchronous/append.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const appendNumbers = append([0, 1, 2, 3, 4]);

export const appendTests = [
	{
		given: "an array of numbers an array of strings",
		must: "return both arrays concatenated",
		received: () => iterableToArray(appendNumbers(["foo", "bar"])),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4],
	},
	{
		given: "an array of numbers we'll append twice an array of strings",
		must: "return all arrays concatenated",
		received: () =>
			iterableToArray(appendNumbers(appendNumbers(["foo", "bar"]))),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
	},
	{
		given: "an array of numbers an iterable of strings",
		must: "return both arrays concatenated",
		received: () =>
			iterableToArray(appendNumbers(toIterable(["foo", "bar"]))),
		wanted: () => ["foo", "bar", 0, 1, 2, 3, 4],
	},
] satisfies Tests<ReadOnlyArray<number | string>>;
