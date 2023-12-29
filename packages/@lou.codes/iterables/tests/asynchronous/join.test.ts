import type { Tests } from "@lou.codes/test";
import { join } from "../../src/asynchronous/join.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

export const joinTests = [
	{
		given: "an array of numbers",
		must: "return those numbers separated by spaces",
		received: () => spaceJoin(array),
		wanted: () => "0 1 2 3",
	},
	{
		given: "an iterable of numbers",
		must: "return those numbers separated by spaces",
		received: () => spaceJoin(toIterable(array)),
		wanted: () => "0 1 2 3",
	},
	{
		given: "an empty array",
		must: "return empty string",
		received: () => spaceJoin([]),
		wanted: () => "",
	},
	{
		given: "an empty iterable",
		must: "return empty string",
		received: () => spaceJoin(toIterable([])),
		wanted: () => "",
	},
	{
		given: "an iterable with empty strings",
		must: "return spaces for each value",
		received: () => spaceJoin(toIterable(["", "", ""])),
		wanted: () => "  ",
	},
	{
		given: "an iterable with undefined values",
		must: "return empty stringified undefined values",
		received: () => spaceJoin(toIterable([undefined, undefined])),
		wanted: () => "undefined undefined",
	},
] satisfies Tests<string>;
