import type { Tests } from "@lou.codes/test";
import type { Precise } from "../src/Precise.js";
import { preciseAdd } from "../src/preciseAdd.js";

const preciseAddPositive = preciseAdd(2n);
const preciseAddNegative = preciseAdd(-2n);
const preciseAddFloat = preciseAdd(2n, -1n);
const preciseAddNegativeFloat = preciseAdd(-2n, -1n);

export const preciseAddTests = [
	{
		given: "1 + 2",
		must: "return 3",
		received: () => preciseAddPositive(1n),
		wanted: () => [3n],
	},
	{
		given: "-1 + 2",
		must: "return 1",
		received: () => preciseAddPositive(-1n),
		wanted: () => [1n],
	},
	{
		given: "0.1 + 2",
		must: "return 2.1",
		received: () => preciseAddPositive(1n, -1n),
		wanted: () => [21n, -1n],
	},
	{
		given: "-0.1 + 2",
		must: "return 1.9",
		received: () => preciseAddPositive(-1n, -1n),
		wanted: () => [19n, -1n],
	},
	{
		given: "1 + -2",
		must: "return -1",
		received: () => preciseAddNegative(1n),
		wanted: () => [-1n],
	},
	{
		given: "-1 + -2",
		must: "return -3",
		received: () => preciseAddNegative(-1n),
		wanted: () => [-3n],
	},
	{
		given: "0.1 + -2",
		must: "return -1.9",
		received: () => preciseAddNegative(1n, -1n),
		wanted: () => [-19n, -1n],
	},
	{
		given: "-0.1 + -2",
		must: "return -2.1",
		received: () => preciseAddNegative(-1n, -1n),
		wanted: () => [-21n, -1n],
	},
	{
		given: "1 + 0.2",
		must: "return 1.2",
		received: () => preciseAddFloat(1n),
		wanted: () => [12n, -1n],
	},
	{
		given: "-1 + 0.2",
		must: "return -0.8",
		received: () => preciseAddFloat(-1n),
		wanted: () => [-8n, -1n],
	},
	{
		given: "0.1 + 0.2",
		must: "return 0.3",
		received: () => preciseAddFloat(1n, -1n),
		wanted: () => [3n, -1n],
	},
	{
		given: "-0.1 + 0.2",
		must: "return 0.1",
		received: () => preciseAddFloat(-1n, -1n),
		wanted: () => [1n, -1n],
	},
	{
		given: "1 + -0.2",
		must: "return 0.8",
		received: () => preciseAddNegativeFloat(1n),
		wanted: () => [8n, -1n],
	},
	{
		given: "-1 + -0.2",
		must: "return -1.2",
		received: () => preciseAddNegativeFloat(-1n),
		wanted: () => [-12n, -1n],
	},
	{
		given: "0.1 + -0.2",
		must: "return -0.1",
		received: () => preciseAddNegativeFloat(1n, -1n),
		wanted: () => [-1n, -1n],
	},
	{
		given: "-0.1 + -0.2",
		must: "return -0.3",
		received: () => preciseAddNegativeFloat(-1n, -1n),
		wanted: () => [-3n, -1n],
	},
	{
		given: "5 + 0.00001",
		must: "return 5.00001",
		received: () => preciseAdd(1n, -5n)(5n),
		wanted: () => [500_001n, -5n],
	},
	{
		given: "0.00001 + 5",
		must: "return 5.00001",
		received: () => preciseAdd(5n)(1n, -5n),
		wanted: () => [500_001n, -5n],
	},
] satisfies Tests<Precise>;
