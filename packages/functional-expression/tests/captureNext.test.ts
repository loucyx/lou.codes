import type { Tests } from "@lou.codes/test";
import { captureNext } from "../src/captureNext.js";

export const captureNextTests = [
	{
		given: "a number 13",
		must: "add capture next group around it",
		received: () => captureNext(13),
		wanted: () => "(?=13)",
	},
] satisfies Tests<string>;
