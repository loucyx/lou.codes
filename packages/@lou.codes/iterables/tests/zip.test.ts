import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { zip } from "../src/zip.js";
import { asyncIterateArray } from "./utils.js";

const zipFooBar = zip(["foo", "bar"]);

export default [
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
		given: "zip empty async iterable",
		must: "return empty iterable",
		received: () => iterableToArray(zipFooBar(asyncIterateArray([]))),
		wanted: () => [],
	},
	{
		given: "zip with 2 strings an async iterable with 2 numbers",
		must: "zip numbers and strings",
		received: () => iterableToArray(zipFooBar(asyncIterateArray([1, 2]))),
		wanted: () => [
			["foo", 1],
			["bar", 2],
		],
	},
	{
		given: "zip with 2 strings and async iterable with 1 string",
		must: "zip strings to shortests length",
		received: () => iterableToArray(zipFooBar(asyncIterateArray(["baz"]))),
		wanted: () => [["foo", "baz"]],
	},
] satisfies Tests<
	| ReadOnlyArray<readonly [string, number]>
	| ReadOnlyArray<readonly [string, string]>
>;
