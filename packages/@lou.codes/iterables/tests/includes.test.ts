import type { Tests } from "@lou.codes/test";
import { includes } from "../src/includes.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const includesFoo = includes("foo");

export default [
	{
		given: "a string and an array of strings containing that string",
		must: "return true",
		received: () => includesFoo(["foo", "bar"]),
		wanted: () => true,
	},
	{
		given: "a string and an array not containing that string",
		must: "return false",
		received: () => includesFoo(["baz", "bar"]),
		wanted: () => false,
	},
	{
		given: "a string and an iterable of strings containing that string",
		must: "return true",
		received: () => includesFoo(iterateArray(["foo", "bar"])),
		wanted: () => true,
	},
	{
		given: "a string and an iterable not containing that string",
		must: "return false",
		received: () => includesFoo(iterateArray(["baz", "bar"])),
		wanted: () => false,
	},
	{
		given: "a string and an async iterable of strings containing that string",
		must: "return true",
		received: () => includesFoo(asyncIterateArray(["foo", "bar"])),
		wanted: () => true,
	},
	{
		given: "a string and an async iterable not containing that string",
		must: "return false",
		received: () => includesFoo(asyncIterateArray(["baz", "bar"])),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
