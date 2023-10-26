import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { drop } from "../src/drop.js";
import { head } from "../src/head.js";
import { range } from "../src/range.js";
import { asyncIterateArray } from "./utils.js";

const array = [0, 1, 2];

export default [
	{
		given: "an array",
		must: "return array first element",
		received: () => head(array),
		wanted: () => 0,
	},
	{
		given: "an iterable",
		must: "return iterable's first element",
		received: () => head(range(1)(0)(2)),
		wanted: () => 0,
	},
	{
		given: "an empty array",
		must: "return undefined",
		received: () => head([]),
		wanted: () => undefined,
	},
	{
		given: "an empty iterable",
		must: "return undefined",
		received: () => head(drop(Infinity)(array)),
		wanted: () => undefined,
	},

	{
		given: "an iterable with numbers",
		must: "return a promise with the first element",
		received: () => head(asyncIterateArray([0, 1, 2])),
		wanted: () => 0,
	},
	{
		given: "an empty iterable",
		must: "return undefined",
		received: () => head(asyncIterateArray([])),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
