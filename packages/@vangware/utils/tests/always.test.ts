import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { always } from "../src/always.js";

export default [
	{
		given: "always with a string",
		must: "return said string when called",
		received: always("foo"),
		wanted: () => "foo",
	},
	{
		given: "an array and an always with a string",
		must: "return array filled with always string",
		received: () => [0, 1, 2, 3].map(always("foo")),
		wanted: () => ["foo", "foo", "foo", "foo"],
	},
] satisfies Tests<ReadOnlyArray<string> | string>;
