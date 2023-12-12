import type { Tests } from "@lou.codes/test";
import { some } from "../src/some.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const someNumber = some(
	(value: unknown): value is number => typeof value === "number",
);

export const someTests = [
	{
		given: "an array of numbers",
		must: "return true",
		received: () => someNumber([0, 1, 2, 3]),
		wanted: () => true,
	},
	{
		given: "an array of numbers with a string on it",
		must: "return true",
		received: () => someNumber([0, 1, 2, "foo", 3]),
		wanted: () => true,
	},
	{
		given: "an array of strings",
		must: "return false",
		received: () => someNumber(["foo", "bar"]),
		wanted: () => false,
	},
	{
		given: "an iterable of numbers",
		must: "return true",
		received: () => someNumber(iterateArray([0, 1, 2, 3])),
		wanted: () => true,
	},
	{
		given: "an iterable of numbers with a string on it",
		must: "return true",
		received: () => someNumber(iterateArray([0, 1, 2, "foo", 3])),
		wanted: () => true,
	},
	{
		given: "an iterable of strings",
		must: "return false",
		received: () => someNumber(iterateArray(["foo", "bar"])),
		wanted: () => false,
	},
	{
		given: "an async iterable of numbers",
		must: "return true",
		received: () => someNumber(asyncIterateArray([0, 1, 2, 3])),
		wanted: () => true,
	},
	{
		given: "an async iterable of numbers with a string on it",
		must: "return true",
		received: () => someNumber(asyncIterateArray([0, 1, 2, "foo", 3])),
		wanted: () => true,
	},
	{
		given: "an async iterable of strings",
		must: "return false",
		received: () => someNumber(asyncIterateArray(["foo", "bar"])),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
