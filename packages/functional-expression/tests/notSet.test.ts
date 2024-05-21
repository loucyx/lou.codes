import type { Tests } from "@lou.codes/test";
import { notSet } from "../src/notSet.js";

export const notSetTests = [
	{
		given: "a number 13",
		must: "wrap it with a negated set",
		received: () => notSet(13),
		wanted: () => "[^13]",
	},
	{
		given: "a number 1, and a 3",
		must: "wrap them with a negated set",
		received: () => notSet(1, 3),
		wanted: () => "[^13]",
	},
] satisfies Tests<string>;
