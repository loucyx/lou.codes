import type { Tests } from "@lou.codes/test";
import type { Precise } from "../src/Precise.js";
import { preciseSubtract } from "../src/preciseSubtract.js";

const preciseSubtractPositive = preciseSubtract(2n);
const preciseSubtractNegative = preciseSubtract(-2n);
const preciseSubtractFloat = preciseSubtract(2n, -1n);
const preciseSubtractNegativeFloat = preciseSubtract(-2n, -1n);

export const preciseSubtractTests = [
	{
		given: "1 - 2",
		must: "return -1",
		received: () => preciseSubtractPositive(1n),
		wanted: () => [-1n],
	},
	{
		given: "-1 - 2",
		must: "return -3",
		received: () => preciseSubtractPositive(-1n),
		wanted: () => [-3n],
	},
	{
		given: "0.1 - 2",
		must: "return -1.9",
		received: () => preciseSubtractPositive(1n, -1n),
		wanted: () => [-19n, -1n],
	},
	{
		given: "-0.1 - 2",
		must: "return -2.1",
		received: () => preciseSubtractPositive(-1n, -1n),
		wanted: () => [-21n, -1n],
	},
	{
		given: "1 - -2",
		must: "return 3",
		received: () => preciseSubtractNegative(1n),
		wanted: () => [3n],
	},
	{
		given: "-1 - -2",
		must: "return 1",
		received: () => preciseSubtractNegative(-1n),
		wanted: () => [1n],
	},
	{
		given: "0.1 - -2",
		must: "return 2.1",
		received: () => preciseSubtractNegative(1n, -1n),
		wanted: () => [21n, -1n],
	},
	{
		given: "-0.1 - -2",
		must: "return 1.9",
		received: () => preciseSubtractNegative(-1n, -1n),
		wanted: () => [19n, -1n],
	},
	{
		given: "1 - 0.2",
		must: "return 0.8",
		received: () => preciseSubtractFloat(1n),
		wanted: () => [8n, -1n],
	},
	{
		given: "-1 - 0.2",
		must: "return -1.2",
		received: () => preciseSubtractFloat(-1n),
		wanted: () => [-12n, -1n],
	},
	{
		given: "0.1 - 0.2",
		must: "return -0.1",
		received: () => preciseSubtractFloat(1n, -1n),
		wanted: () => [-1n, -1n],
	},
	{
		given: "-0.1 - 0.2",
		must: "return -0.3",
		received: () => preciseSubtractFloat(-1n, -1n),
		wanted: () => [-3n, -1n],
	},
	{
		given: "1 - -0.2",
		must: "return 1.2",
		received: () => preciseSubtractNegativeFloat(1n),
		wanted: () => [12n, -1n],
	},
	{
		given: "-1 - -0.2",
		must: "return -0.8",
		received: () => preciseSubtractNegativeFloat(-1n),
		wanted: () => [-8n, -1n],
	},
	{
		given: "0.1 - -0.2",
		must: "return 0.3",
		received: () => preciseSubtractNegativeFloat(1n, -1n),
		wanted: () => [3n, -1n],
	},
	{
		given: "-0.1 - -0.2",
		must: "return 0.1",
		received: () => preciseSubtractNegativeFloat(-1n, -1n),
		wanted: () => [1n, -1n],
	},
	{
		given: "5 - 0.00001",
		must: "return 4.99999",
		received: () => preciseSubtract(1n, -5n)(5n),
		wanted: () => [499_999n, -5n],
	},
	{
		given: "0.00001 - 5",
		must: "return -4.99999",
		received: () => preciseSubtract(5n)(1n, -5n),
		wanted: () => [-499_999n, -5n],
	},
] satisfies Tests<Precise>;
