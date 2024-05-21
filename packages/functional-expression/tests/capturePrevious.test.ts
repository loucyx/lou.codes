import type { Tests } from "@lou.codes/test";
import { capturePrevious } from "../src/capturePrevious.js";

export const capturePreviousTests = [
	{
		given: "a number 13",
		must: "add capture previous group around it",
		received: () => capturePrevious(13),
		wanted: () => "(?<=13)",
	},
	{
		given: "a number 1, and a 3",
		must: "add capture previous group around it",
		received: () => capturePrevious(1, 3),
		wanted: () => "(?<=13)",
	},
] satisfies Tests<string>;
