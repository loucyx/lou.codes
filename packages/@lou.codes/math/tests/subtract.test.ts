import type { Tests } from "@lou.codes/test";
import { subtract } from "../src/subtract.js";

const subtractPositive = subtract(2);
const subtractNegative = subtract(-2);
const subtractFloat = subtract(0.2);
const subtractNegativeFloat = subtract(-0.2);

export const subtractTests = [
	{
		given: "1 - 2",
		must: "return -1",
		received: () => subtractPositive(1),
		wanted: () => -1,
	},
	{
		given: "-1 - 2",
		must: "return -3",
		received: () => subtractPositive(-1),
		wanted: () => -3,
	},
	{
		given: "0.1 - 2",
		must: "return -1.9",
		received: () => subtractPositive(0.1),
		wanted: () => -1.9,
	},
	{
		given: "-0.1 - 2",
		must: "return -2.1",
		received: () => subtractPositive(-0.1),
		wanted: () => -2.1,
	},
	{
		given: "1 - -2",
		must: "return 3",
		received: () => subtractNegative(1),
		wanted: () => 3,
	},
	{
		given: "-1 - -2",
		must: "return 1",
		received: () => subtractNegative(-1),
		wanted: () => 1,
	},
	{
		given: "0.1 - -2",
		must: "return 2.1",
		received: () => subtractNegative(0.1),
		wanted: () => 2.1,
	},
	{
		given: "-0.1 - -2",
		must: "return 1.9",
		received: () => subtractNegative(-0.1),
		wanted: () => 1.9,
	},
	{
		given: "1 - 0.2",
		must: "return 0.8",
		received: () => subtractFloat(1),
		wanted: () => 0.8,
	},
	{
		given: "-1 - 0.2",
		must: "return -1.2",
		received: () => subtractFloat(-1),
		wanted: () => -1.2,
	},
	{
		given: "0.1 - 0.2",
		must: "return -0.1",
		received: () => subtractFloat(0.1),
		wanted: () => -0.1,
	},
	{
		given: "-0.1 - 0.2",
		must: "return -0.3",
		received: () => subtractFloat(-0.1),
		wanted: () => -0.3,
	},
	{
		given: "1 - -0.2",
		must: "return 1.2",
		received: () => subtractNegativeFloat(1),
		wanted: () => 1.2,
	},
	{
		given: "-1 - -0.2",
		must: "return -0.8",
		received: () => subtractNegativeFloat(-1),
		wanted: () => -0.8,
	},
	{
		given: "0.1 - -0.2",
		must: "return 0.3",
		received: () => subtractNegativeFloat(0.1),
		wanted: () => 0.3,
	},
	{
		given: "-0.1 - -0.2",
		must: "return 0.1",
		received: () => subtractNegativeFloat(-0.1),
		wanted: () => 0.1,
	},
	{
		given: "5 - 0.00001",
		must: "return 4.99999",
		received: () => subtract(0.000_01)(5),
		wanted: () => 4.999_99,
	},
	{
		given: "0.00001 - 5",
		must: "return -4.99999",
		received: () => subtract(5)(0.000_01),
		wanted: () => -4.999_99,
	},
] satisfies Tests<number>;
