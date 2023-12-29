import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { zip } from "../src/zip.js";

const zipFooBar = zip(["foo", "bar"]);

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
] satisfies Tests<
	| ReadOnlyArray<readonly [string, number]>
	| ReadOnlyArray<readonly [string, string]>
>;
