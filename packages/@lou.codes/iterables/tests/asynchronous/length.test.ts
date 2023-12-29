import type { Tests } from "@lou.codes/test";
import { length } from "../../src/asynchronous/length.js";
import { range } from "../../src/asynchronous/range.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

export const lengthTests = [
	{
		given: "an array",
		must: "return length",
		received: () => length([0, 1, 2]),
		wanted: () => 3,
	},
	{
		given: "an iterable",
		must: "return length",
		received: () => length(range(1)(0)(2)),
		wanted: () => 3,
	},
	{
		given: "an empty array",
		must: "return 0",
		received: () => length([]),
		wanted: () => 0,
	},
	{
		given: "an empty iterable",
		must: "return 0",
		received: () => length(toIterable([])),
		wanted: () => 0,
	},
] satisfies Tests<number>;
