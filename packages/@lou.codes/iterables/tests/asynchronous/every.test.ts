import type { Tests } from "@lou.codes/test";
import { every } from "../../src/asynchronous/every.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const everyNumbers = every(
	(value: unknown): value is number => typeof value === "number",
);
const numbersArray = [0, 1, 2, 3];
const numbersWithStringArray = [0, 1, 2, "foo", 3];

export const everyTests = [
	{
		given: "an array of numbers",
		must: "return true",
		received: () => everyNumbers(numbersArray),
		wanted: () => true,
	},
	{
		given: "an array of numbers with a string on it",
		must: "return false",
		received: () => everyNumbers(numbersWithStringArray),
		wanted: () => false,
	},
	{
		given: "an iterable of numbers",
		must: "return true",
		received: () => everyNumbers(toIterable(numbersArray)),
		wanted: () => true,
	},
	{
		given: "an iterable of numbers with a string on it",
		must: "return false",
		received: () => everyNumbers(toIterable(numbersWithStringArray)),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
