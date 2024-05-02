import type { Tests } from "@lou.codes/test";
import { add } from "../src/add.js";

const addPositive = add(2);
const addNegative = add(-2);
const addFloat = add(0.2);
const addNegativeFloat = add(-0.2);

export const addTests = [
	{
		given: "1 + 2",
		must: "return 3",
		received: () => addPositive(1),
		wanted: () => 3,
	},
	{
		given: "-1 + 2",
		must: "return 1",
		received: () => addPositive(-1),
		wanted: () => 1,
	},
	{
		given: "0.1 + 2",
		must: "return 2.1",
		received: () => addPositive(0.1),
		wanted: () => 2.1,
	},
	{
		given: "-0.1 + 2",
		must: "return 1.9",
		received: () => addPositive(-0.1),
		wanted: () => 1.9,
	},
	{
		given: "1 + -2",
		must: "return -1",
		received: () => addNegative(1),
		wanted: () => -1,
	},
	{
		given: "-1 + -2",
		must: "return -3",
		received: () => addNegative(-1),
		wanted: () => -3,
	},
	{
		given: "0.1 + -2",
		must: "return -1.9",
		received: () => addNegative(0.1),
		wanted: () => -1.9,
	},
	{
		given: "-0.1 + -2",
		must: "return -2.1",
		received: () => addNegative(-0.1),
		wanted: () => -2.1,
	},
	{
		given: "1 + 0.2",
		must: "return 1.2",
		received: () => addFloat(1),
		wanted: () => 1.2,
	},
	{
		given: "-1 + 0.2",
		must: "return -0.8",
		received: () => addFloat(-1),
		wanted: () => -0.8,
	},
	{
		given: "0.1 + 0.2",
		must: "return 0.3",
		received: () => addFloat(0.1),
		wanted: () => 0.3,
	},
	{
		given: "-0.1 + 0.2",
		must: "return 0.1",
		received: () => addFloat(-0.1),
		wanted: () => 0.1,
	},
	{
		given: "1 + -0.2",
		must: "return 0.8",
		received: () => addNegativeFloat(1),
		wanted: () => 0.8,
	},
	{
		given: "-1 + -0.2",
		must: "return -1.2",
		received: () => addNegativeFloat(-1),
		wanted: () => -1.2,
	},
	{
		given: "0.1 + -0.2",
		must: "return -0.1",
		received: () => addNegativeFloat(0.1),
		wanted: () => -0.1,
	},
	{
		given: "-0.1 + -0.2",
		must: "return -0.3",
		received: () => addNegativeFloat(-0.1),
		wanted: () => -0.3,
	},
	{
		given: "5 + 0.00001",
		must: "return 5.00001",
		received: () => add(0.000_01)(5),
		wanted: () => 5.000_01,
	},
	{
		given: "0.00001 + 5",
		must: "return 5.00001",
		received: () => add(5)(0.000_01),
		wanted: () => 5.000_01,
	},
] satisfies Tests<number>;
