import type { Tests } from "@lou.codes/test";
import { multiply } from "../src/multiply.js";

const multiplyPositive = multiply(2);
const multiplyNegative = multiply(-2);
const multiplyFloat = multiply(0.2);
const multiplyNegativeFloat = multiply(-0.2);

export const multiplyTests = [
	{
		given: "1 * 2",
		must: "return 2",
		received: () => multiplyPositive(1),
		wanted: () => 2,
	},
	{
		given: "-1 * 2",
		must: "return -2",
		received: () => multiplyPositive(-1),
		wanted: () => -2,
	},
	{
		given: "0.1 * 2",
		must: "return 0.2",
		received: () => multiplyPositive(0.1),
		wanted: () => 0.2,
	},
	{
		given: "-0.1 * 2",
		must: "return -0.2",
		received: () => multiplyPositive(-0.1),
		wanted: () => -0.2,
	},
	{
		given: "1 * -2",
		must: "return -2",
		received: () => multiplyNegative(1),
		wanted: () => -2,
	},
	{
		given: "-1 * -2",
		must: "return 2",
		received: () => multiplyNegative(-1),
		wanted: () => 2,
	},
	{
		given: "0.1 * -2",
		must: "return -0.2",
		received: () => multiplyNegative(0.1),
		wanted: () => -0.2,
	},
	{
		given: "-0.1 * -2",
		must: "return 0.2",
		received: () => multiplyNegative(-0.1),
		wanted: () => 0.2,
	},
	{
		given: "1 * 0.2",
		must: "return 0.2",
		received: () => multiplyFloat(1),
		wanted: () => 0.2,
	},
	{
		given: "-1 * 0.2",
		must: "return -0.2",
		received: () => multiplyFloat(-1),
		wanted: () => -0.2,
	},
	{
		given: "0.1 * 0.2",
		must: "return 0.02",
		received: () => multiplyFloat(0.1),
		wanted: () => 0.02,
	},
	{
		given: "-0.1 * 0.2",
		must: "return -0.02",
		received: () => multiplyFloat(-0.1),
		wanted: () => -0.02,
	},
	{
		given: "1 * -0.2",
		must: "return -0.2",
		received: () => multiplyNegativeFloat(1),
		wanted: () => -0.2,
	},
	{
		given: "-1 * -0.2",
		must: "return 0.2",
		received: () => multiplyNegativeFloat(-1),
		wanted: () => 0.2,
	},
	{
		given: "0.1 * -0.2",
		must: "return -0.02",
		received: () => multiplyNegativeFloat(0.1),
		wanted: () => -0.02,
	},
	{
		given: "-0.1 * -0.2",
		must: "return 0.02",
		received: () => multiplyNegativeFloat(-0.1),
		wanted: () => 0.02,
	},
	{
		given: "5 * 0.00001",
		must: "return 0.00005",
		received: () => multiply(0.000_01)(5),
		wanted: () => 0.000_05,
	},
	{
		given: "0.00001 * 5",
		must: "return 0.00005",
		received: () => multiply(5)(0.000_01),
		wanted: () => 0.000_05,
	},
] satisfies Tests<number>;
