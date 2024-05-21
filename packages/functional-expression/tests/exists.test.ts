import type { Tests } from "@lou.codes/test";
import { exists } from "../src/exists.js";

export const existsTests = [
	{
		given: "a number 13",
		must: "add a + to the right",
		received: () => exists(13),
		wanted: () => "13+",
	},
] satisfies Tests<string>;
