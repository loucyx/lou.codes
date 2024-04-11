import { isNumber } from "@lou.codes/predicates";
import type { Tests } from "@lou.codes/test";
import { some } from "../../src/asynchronous/some.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const someNumber = some(isNumber);

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
		received: () => someNumber(toIterable([0, 1, 2, 3])),
		wanted: () => true,
	},
	{
		given: "an iterable of numbers with a string on it",
		must: "return true",
		received: () => someNumber(toIterable([0, 1, 2, "foo", 3])),
		wanted: () => true,
	},
	{
		given: "an iterable of strings",
		must: "return false",
		received: () => someNumber(toIterable(["foo", "bar"])),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
