import type { Tests } from "@lou.codes/test";
import { captureType } from "../src/captureType.js";

export const captureTypeTests = [
	{
		given: "a {TEST} string a number 13",
		must: "add capture type group {TEST} around 13",
		received: () => captureType("{TEST}")(13),
		wanted: () => "(?{TEST}13)",
	},
	{
		given: "a {TEST} string a number 1 and a 3",
		must: "add capture type group {TEST} around 13",
		received: () => captureType("{TEST}")(1, 3),
		wanted: () => "(?{TEST}13)",
	},
] satisfies Tests<string>;
