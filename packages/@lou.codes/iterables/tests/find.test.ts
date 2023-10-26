import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { find } from "../src/find.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const findString = find(
	(value: number | string): value is string => typeof value === "string",
);

export default [
	{
		given: "an array of numbers and strings containing search matching item",
		must: "get the first string that matches",
		received: () => findString([0, 1, "foo", 2, "bar"]),
		wanted: () => "foo",
	},
	{
		given: "an array of numbers without search matching item",
		must: "get the first string",
		received: () => findString([0, 1, 2]),
		wanted: () => undefined,
	},
	{
		given: "an iterable of numbers and strings containing search matching item",
		must: "get the first string that matches",
		received: () => findString(iterateArray([0, 1, "foo", 2, "bar"])),
		wanted: () => "foo",
	},
	{
		given: "an iterable of numbers without search matching item",
		must: "get the first string",
		received: () => findString(iterateArray([0, 1, 2])),
		wanted: () => undefined,
	},
	{
		given: "an async iterable of numbers and strings containing search matching item",
		must: "get the first string that matches",
		received: () => findString(asyncIterateArray([0, 1, "foo", 2, "bar"])),
		wanted: () => "foo",
	},
	{
		given: "an async iterable of numbers without search matching item",
		must: "get the first string",
		received: () => findString(asyncIterateArray([0, 1, 2])),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number | string>>;
