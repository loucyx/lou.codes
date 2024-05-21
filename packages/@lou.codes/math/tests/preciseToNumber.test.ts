import type { Tests } from "@lou.codes/test";
import { preciseToNumber } from "../src/preciseToNumber.js";

export const preciseToNumberTests = [
	{
		given: "a tuple of a positive integer without zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(13n),
		wanted: () => 13,
	},
	{
		given: "a tuple of a positive integer with zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(13n, 2n),
		wanted: () => 1300,
	},
	{
		given: "a tuple of a negative integer without zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(-13n),
		wanted: () => -13,
	},
	{
		given: "a tuple of a negative integer with zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(-13n, 2n),
		wanted: () => -1300,
	},
	{
		given: "a tuple of a positive float without zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(131n, -1n),
		wanted: () => 13.1,
	},
	{
		given: "a tuple of a positive float with zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(13_001n, -1n),
		wanted: () => 1300.1,
	},
	{
		given: "a tuple of a negative float without zeroes on the right",
		must: "return number",
		received: () => preciseToNumber(-131n, -1n),
		wanted: () => -13.1,
	},
	{
		given: "a tuple of a negative float with zeroes on the right",
		must: "return a number",
		received: () => preciseToNumber(-13_001n, -1n),
		wanted: () => -1300.1,
	},
	{
		given: "a tuple of not normalized values",
		must: "return number",
		received: () => preciseToNumber(-13_000n, 0n),
		wanted: () => -13_000,
	},
] satisfies Tests<number>;
