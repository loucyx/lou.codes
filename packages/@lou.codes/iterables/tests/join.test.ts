import type { Tests } from "@lou.codes/test";
import { join } from "../src/join.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

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
		received: () => spaceJoin(iterateArray(array)),
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
		received: () => spaceJoin(iterateArray([])),
		wanted: () => "",
	},
	{
		given: "an iterable with empty strings",
		must: "return spaces for each value",
		received: () => spaceJoin(iterateArray(["", "", ""])),
		wanted: () => "  ",
	},
	{
		given: "an iterable with undefined values",
		must: "return empty stringified undefined values",
		received: () => spaceJoin(iterateArray([undefined, undefined])),
		wanted: () => "undefined undefined",
	},
	{
		given: "an async iterable of numbers",
		must: "return those numbers separated by spaces",
		received: () => spaceJoin(asyncIterateArray(array)),
		wanted: () => "0 1 2 3",
	},
	{
		given: "an empty async iterable",
		must: "return empty string",
		received: () => spaceJoin(asyncIterateArray([])),
		wanted: () => "",
	},
] satisfies Tests<string>;
