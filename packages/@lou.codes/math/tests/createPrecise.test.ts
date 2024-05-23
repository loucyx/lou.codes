import type { Tests } from "@lou.codes/test";
import type { Precise } from "../src/Precise.js";
import { createPrecise } from "../src/createPrecise.js";

export const createPreciseTests = [
	{
		given: "Infinity",
		must: "return Infinity",
		received: () => createPrecise(Infinity),
		wanted: () => [Infinity],
	},
	{
		given: "Number valid tuple",
		must: "return said tuple",
		received: () => createPrecise(1n, 5n),
		wanted: () => [1n, 5n],
	},
	{
		given: "Number with 0 exponent",
		must: "return only base",
		received: () => createPrecise(1n, 0n),
		wanted: () => [1n],
	},
	{
		given: "Number with no exponent",
		must: "return only base",
		received: () => createPrecise(1n),
		wanted: () => [1n],
	},
] satisfies Tests<Precise>;
