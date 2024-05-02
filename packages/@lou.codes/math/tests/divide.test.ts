import type { Tests } from "@lou.codes/test";
import { divide } from "../src/divide.js";

const dividePositive = divide(2);
const divideNegative = divide(-2);
const divideFloat = divide(0.2);
const divideNegativeFloat = divide(-0.2);

export const divideTests = [
	{
		given: "1 / 2",
		must: "return 0.5",
		received: () => dividePositive(1),
		wanted: () => 0.5,
	},
	{
		given: "-1 / 2",
		must: "return -0.5",
		received: () => dividePositive(-1),
		wanted: () => -0.5,
	},
	{
		given: "0.1 / 2",
		must: "return 0.05",
		received: () => dividePositive(0.1),
		wanted: () => 0.05,
	},
	{
		given: "-0.1 / 2",
		must: "return -0.05",
		received: () => dividePositive(-0.1),
		wanted: () => -0.05,
	},
	{
		given: "1 / -2",
		must: "return -0.5",
		received: () => divideNegative(1),
		wanted: () => -0.5,
	},
	{
		given: "-1 / -2",
		must: "return 0.5",
		received: () => divideNegative(-1),
		wanted: () => 0.5,
	},
	{
		given: "0.1 / -2",
		must: "return -0.05",
		received: () => divideNegative(0.1),
		wanted: () => -0.05,
	},
	{
		given: "-0.1 / -2",
		must: "return 0.05",
		received: () => divideNegative(-0.1),
		wanted: () => 0.05,
	},
	{
		given: "1 / 0.2",
		must: "return 5",
		received: () => divideFloat(1),
		wanted: () => 5,
	},
	{
		given: "-1 / 0.2",
		must: "return -5",
		received: () => divideFloat(-1),
		wanted: () => -5,
	},
	{
		given: "0.1 / 0.2",
		must: "return 0.5",
		received: () => divideFloat(0.1),
		wanted: () => 0.5,
	},
	{
		given: "-0.1 / 0.2",
		must: "return -0.5",
		received: () => divideFloat(-0.1),
		wanted: () => -0.5,
	},
	{
		given: "1 / -0.2",
		must: "return -5",
		received: () => divideNegativeFloat(1),
		wanted: () => -5,
	},
	{
		given: "-1 / -0.2",
		must: "return 5",
		received: () => divideNegativeFloat(-1),
		wanted: () => 5,
	},
	{
		given: "0.1 / -0.2",
		must: "return -0.5",
		received: () => divideNegativeFloat(0.1),
		wanted: () => -0.5,
	},
	{
		given: "-0.1 / -0.2",
		must: "return 0.5",
		received: () => divideNegativeFloat(-0.1),
		wanted: () => 0.5,
	},
	{
		given: "5 / 0.00001",
		must: "return 500000",
		received: () => divide(0.000_01)(5),
		wanted: () => 500_000,
	},
	{
		given: "0.00001 / 5",
		must: "return 0.000002",
		received: () => divide(5)(0.000_01),
		wanted: () => 0.000_002,
	},
] satisfies Tests<number>;
