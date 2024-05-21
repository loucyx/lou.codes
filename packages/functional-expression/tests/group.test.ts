import type { Tests } from "@lou.codes/test";
import { group } from "../src/group.js";

export const groupTests = [
	{
		given: "a number 13",
		must: "add a non-capturing group around it",
		received: () => group(13),
		wanted: () => "(?:13)",
	},
	{
		given: "a number 1, and a 3",
		must: "add a non-capturing next group around 13",
		received: () => group(1, 3),
		wanted: () => "(?:13)",
	},
] satisfies Tests<string>;
