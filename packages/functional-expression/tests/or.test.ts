import type { Tests } from "@lou.codes/test";
import { or } from "../src/or.js";

export const orTests = [
	{
		given: "a number 13",
		must: "return the same number because no other values where provided",
		received: () => or(13),
		wanted: () => "13",
	},
	{
		given: "a number 1, and a 3",
		must: "join them with a | in between",
		received: () => or(1, 3),
		wanted: () => "1|3",
	},
] satisfies Tests<string>;
