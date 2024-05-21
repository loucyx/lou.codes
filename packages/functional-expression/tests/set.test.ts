import type { Tests } from "@lou.codes/test";
import { set } from "../src/set.js";

export const setTests = [
	{
		given: "a number 13",
		must: "add a [] around it",
		received: () => set(13),
		wanted: () => "[13]",
	},
	{
		given: "a 10 and a 13",
		must: "add a [] around them",
		received: () => set(10, 13),
		wanted: () => "[1013]",
	},
] satisfies Tests<string>;
