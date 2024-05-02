import type { Tests } from "@lou.codes/test";
import type { Precise } from "../src/Precise.js";
import { preciseMultiply } from "../src/preciseMultiply.js";

const preciseMultiplyPositive = preciseMultiply(2n);
const preciseMultiplyNegative = preciseMultiply(-2n);
const preciseMultiplyFloat = preciseMultiply(2n, -1n);
const preciseMultiplyNegativeFloat = preciseMultiply(-2n, -1n);

export const preciseMultiplyTests = [
	{
		given: "1 * 2",
		must: "return 2",
		received: () => preciseMultiplyPositive(1n),
		wanted: () => [2n],
	},
	{
		given: "-1 * 2",
		must: "return -2",
		received: () => preciseMultiplyPositive(-1n),
		wanted: () => [-2n],
	},
	{
		given: "0.1 * 2",
		must: "return 0.2",
		received: () => preciseMultiplyPositive(1n, -1n),
		wanted: () => [2n, -1n],
	},
	{
		given: "-0.1 * 2",
		must: "return -0.2",
		received: () => preciseMultiplyPositive(-1n, -1n),
		wanted: () => [-2n, -1n],
	},
	{
		given: "1 * -2",
		must: "return -2",
		received: () => preciseMultiplyNegative(1n),
		wanted: () => [-2n],
	},
	{
		given: "-1 * -2",
		must: "return 2",
		received: () => preciseMultiplyNegative(-1n),
		wanted: () => [2n],
	},
	{
		given: "0.1 * -2",
		must: "return -0.2",
		received: () => preciseMultiplyNegative(1n, -1n),
		wanted: () => [-2n, -1n],
	},
	{
		given: "-0.1 * -2",
		must: "return 0.2",
		received: () => preciseMultiplyNegative(-1n, -1n),
		wanted: () => [2n, -1n],
	},
	{
		given: "1 * 0.2",
		must: "return 0.2",
		received: () => preciseMultiplyFloat(1n),
		wanted: () => [2n, -1n],
	},
	{
		given: "-1 * 0.2",
		must: "return -0.2",
		received: () => preciseMultiplyFloat(-1n),
		wanted: () => [-2n, -1n],
	},
	{
		given: "0.1 * 0.2",
		must: "return 0.02",
		received: () => preciseMultiplyFloat(1n, -1n),
		wanted: () => [2n, -2n],
	},
	{
		given: "-0.1 * 0.2",
		must: "return -0.02",
		received: () => preciseMultiplyFloat(-1n, -1n),
		wanted: () => [-2n, -2n],
	},
	{
		given: "1 * -0.2",
		must: "return -0.2",
		received: () => preciseMultiplyNegativeFloat(1n),
		wanted: () => [-2n, -1n],
	},
	{
		given: "-1 * -0.2",
		must: "return 0.2",
		received: () => preciseMultiplyNegativeFloat(-1n),
		wanted: () => [2n, -1n],
	},
	{
		given: "0.1 * -0.2",
		must: "return -0.02",
		received: () => preciseMultiplyNegativeFloat(1n, -1n),
		wanted: () => [-2n, -2n],
	},
	{
		given: "-0.1 * -0.2",
		must: "return 0.02",
		received: () => preciseMultiplyNegativeFloat(-1n, -1n),
		wanted: () => [2n, -2n],
	},
	{
		given: "5 * 0.00001",
		must: "return 0.00005",
		received: () => preciseMultiply(1n, -5n)(5n),
		wanted: () => [5n, -5n],
	},
	{
		given: "0.00001 * 5",
		must: "return 0.00005",
		received: () => preciseMultiply(5n)(1n, -5n),
		wanted: () => [5n, -5n],
	},
] satisfies Tests<Precise>;
