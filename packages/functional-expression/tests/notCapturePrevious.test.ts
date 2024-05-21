import type { Tests } from "@lou.codes/test";
import { notCapturePrevious } from "../src/notCapturePrevious.js";

export const notCapturePreviousTests = [
	{
		given: "a number 13",
		must: "not capture previous group around 13",
		received: () => notCapturePrevious(13),
		wanted: () => "(?<!13)",
	},
	{
		given: "a number 1, and a 3",
		must: "not capture previous group around 13",
		received: () => notCapturePrevious(1, 3),
		wanted: () => "(?<!13)",
	},
] satisfies Tests<string>;
