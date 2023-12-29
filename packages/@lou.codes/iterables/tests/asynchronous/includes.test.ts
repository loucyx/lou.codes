import type { Tests } from "@lou.codes/test";
import { includes } from "../../src/asynchronous/includes.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const includesFoo = includes("foo");

export const includesTests = [
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
		received: () => includesFoo(toIterable(["foo", "bar"])),
		wanted: () => true,
	},
	{
		given: "a string and an iterable not containing that string",
		must: "return false",
		received: () => includesFoo(toIterable(["baz", "bar"])),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
