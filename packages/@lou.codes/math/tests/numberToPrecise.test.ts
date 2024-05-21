import type { Tests } from "@lou.codes/test";
import type { Precise } from "../src/Precise.js";
import { numberToPrecise } from "../src/numberToPrecise.js";

export const numberToPreciseTests = [
	{
		given: "a positive integer without zeroes on the right",
		must: "return a that number in a single",
		received: () => numberToPrecise(13),
		wanted: () => [13n],
	},
	{
		given: "a positive integer with zeroes on the right",
		must: "return a that number in a tuple with the zero count",
		received: () => numberToPrecise(1300),
		wanted: () => [13n, 2n],
	},
	{
		given: "a negative integer without zeroes on the right",
		must: "return a that number in a single",
		received: () => numberToPrecise(-13),
		wanted: () => [-13n],
	},
	{
		given: "a negative integer with zeroes on the right",
		must: "return a that number in a tuple with the zero count",
		received: () => numberToPrecise(-1300),
		wanted: () => [-13n, 2n],
	},
	{
		given: "a positive float without zeroes on the right",
		must: "return a tuple",
		received: () => numberToPrecise(13.1),
		wanted: () => [131n, -1n],
	},
	{
		given: "a positive float with zeroes on the right",
		must: "return a tuple",
		received: () => numberToPrecise(1300.1),
		wanted: () => [13_001n, -1n],
	},
	{
		given: "a negative float without zeroes on the right",
		must: "return tuple",
		received: () => numberToPrecise(-13.1),
		wanted: () => [-131n, -1n],
	},
	{
		given: "a negative float with zeroes on the right",
		must: "return a tuple",
		received: () => numberToPrecise(-1300.1),
		wanted: () => [-13_001n, -1n],
	},
] satisfies Tests<Precise>;
