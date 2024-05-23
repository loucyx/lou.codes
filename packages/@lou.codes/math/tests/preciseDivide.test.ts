import type { Tests } from "@lou.codes/test";
import type { Precise } from "../src/Precise.js";
import { preciseDivide } from "../src/preciseDivide.js";

const preciseDividePositive = preciseDivide(2n);
const preciseDivideNegative = preciseDivide(-2n);
const preciseDivideFloat = preciseDivide(2n, -1n);
const preciseDivideNegativeFloat = preciseDivide(-2n, -1n);

export const preciseDivideTests = [
	{
		given: "1 / 2",
		must: "return 0.5",
		received: () => preciseDividePositive(1n),
		wanted: () => [5n, -1n],
	},
	{
		given: "-1 / 2",
		must: "return -0.5",
		received: () => preciseDividePositive(-1n),
		wanted: () => [-5n, -1n],
	},
	{
		given: "0.1 / 2",
		must: "return 0.05",
		received: () => preciseDividePositive(1n, -1n),
		wanted: () => [5n, -2n],
	},
	{
		given: "-0.1 / 2",
		must: "return 0.05",
		received: () => preciseDividePositive(-1n, -1n),
		wanted: () => [-5n, -2n],
	},
	{
		given: "1 / -2",
		must: "return -0.5",
		received: () => preciseDivideNegative(1n, 1n),
		wanted: () => [-5n],
	},
	{
		given: "-1 / -2",
		must: "return 0.5",
		received: () => preciseDivideNegative(-1n),
		wanted: () => [5n, -1n],
	},
	{
		given: "0.1 / -2",
		must: "return 0.05",
		received: () => preciseDivideNegative(1n, -1n),
		wanted: () => [-5n, -2n],
	},
	{
		given: "-0.1 / -2",
		must: "return 0.05",
		received: () => preciseDivideNegative(-1n, -1n),
		wanted: () => [5n, -2n],
	},
	{
		given: "1 / 0.2",
		must: "return 5",
		received: () => preciseDivideFloat(1n),
		wanted: () => [5n],
	},
	{
		given: "-1 / 0.2",
		must: "return -5",
		received: () => preciseDivideFloat(-1n),
		wanted: () => [-5n],
	},
	{
		given: "0.1 / 0.2",
		must: "return 0.5",
		received: () => preciseDivideFloat(1n, -1n),
		wanted: () => [5n, -1n],
	},
	{
		given: "-0.1 / 0.2",
		must: "return -0.5",
		received: () => preciseDivideFloat(-1n, -1n),
		wanted: () => [-5n, -1n],
	},
	{
		given: "1 / -0.2",
		must: "return -5",
		received: () => preciseDivideNegativeFloat(1n),
		wanted: () => [-5n],
	},
	{
		given: "-1 / -0.2",
		must: "return 5",
		received: () => preciseDivideNegativeFloat(-1n),
		wanted: () => [5n],
	},
	{
		given: "0.1 / -0.2",
		must: "return -0.5",
		received: () => preciseDivideNegativeFloat(1n, -1n),
		wanted: () => [-5n, -1n],
	},
	{
		given: "-0.1 / -0.2",
		must: "return 0.5",
		received: () => preciseDivideNegativeFloat(-1n, -1n),
		wanted: () => [5n, -1n],
	},
	{
		given: "5 / 0.00001",
		must: "return 500000",
		received: () => preciseDivide(1n, -5n)(5n),
		wanted: () => [5n, 5n],
	},
	{
		given: "0.00001 / 5",
		must: "return 0.000002",
		received: () => preciseDivide(5n)(1n, -5n),
		wanted: () => [2n, -6n],
	},
	{
		given: "1 / 0",
		must: "return Infinity",
		received: () => preciseDivide(0n)(1n),
		wanted: () => [Infinity],
	},
] satisfies Tests<Precise>;
