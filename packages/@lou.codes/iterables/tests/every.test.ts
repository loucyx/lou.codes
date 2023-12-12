import type { Tests } from "@lou.codes/test";
import { every } from "../src/every.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

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
		received: () => everyNumbers(iterateArray(numbersArray)),
		wanted: () => true,
	},
	{
		given: "an iterable of numbers with a string on it",
		must: "return false",
		received: () => everyNumbers(iterateArray(numbersWithStringArray)),
		wanted: () => false,
	},
	{
		given: "an async iterable of numbers",
		must: "return true",
		received: () => everyNumbers(asyncIterateArray([0, 1, 2, 3])),
		wanted: () => true,
	},
	{
		given: "an async iterable of numbers with a string on it",
		must: "return false",
		received: () => everyNumbers(asyncIterateArray([0, 1, 2, "foo", 3])),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
