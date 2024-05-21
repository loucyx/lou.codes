import type { Tests } from "@lou.codes/test";
import { chain } from "../src/chain.js";

export const chainTests = [
	{
		given: "a simple addition",
		must: "return correct value",
		received: () => chain(0.1).plus(0.2).value,
		wanted: () => 0.3,
	},
	{
		given: "a simple division",
		must: "return correct value",
		received: () => chain(0.6).dividedBy(2).value,
		wanted: () => 0.3,
	},
	{
		given: "a simple multiplication",
		must: "return correct value",
		received: () => chain(0.1).times(3).value,
		wanted: () => 0.3,
	},
	{
		given: "a simple subtraction",
		must: "return correct value",
		received: () => chain(0.5).minus(0.2).value,
		wanted: () => 0.3,
	},
	{
		given: "a complex operation combining all operations",
		must: "return correct value",
		received: () =>
			chain(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2).value,
		wanted: () => 0.3,
	},
] satisfies Tests<number>;
