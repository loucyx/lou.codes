import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";
import { zip } from "../../src/asynchronous/zip.js";

const zipFooBar = zip(toIterable(["foo", "bar"]));

export const zipTests = [
	{
		given: "zip empty array",
		must: "return empty array",
		received: () => iterableToArray(zipFooBar([])),
		wanted: () => [],
	},
	{
		given: "zip with 2 strings an array with 2 numbers",
		must: "zip numbers and strings",
		received: () => iterableToArray(zipFooBar([1, 2])),
		wanted: () => [
			["foo", 1],
			["bar", 2],
		],
	},
	{
		given: "zip with 2 strings and array with 1 string",
		must: "zip strings to shortests length",
		received: () => iterableToArray(zipFooBar(["baz"])),
		wanted: () => [["foo", "baz"]],
	},
	{
		given: "zip with 2 strings and array with 3 numbers",
		must: "zip strings to shortests length",
		received: () => iterableToArray(zipFooBar([1, 2, 3])),
		wanted: () => [
			["foo", 1],
			["bar", 2],
		],
	},
] satisfies Tests<
	| ReadOnlyArray<readonly [string, number]>
	| ReadOnlyArray<readonly [string, string]>
>;
