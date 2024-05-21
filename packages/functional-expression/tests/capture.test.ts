import type { Tests } from "@lou.codes/test";
import { capture } from "../src/capture.js";

export const captureTests = [
	{
		given: "a number 13",
		must: "add a parenthesis around it",
		received: () => capture(13),
		wanted: () => "(13)",
	},
] satisfies Tests<string>;
