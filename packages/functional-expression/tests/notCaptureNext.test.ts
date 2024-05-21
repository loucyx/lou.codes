import type { Tests } from "@lou.codes/test";
import { notCaptureNext } from "../src/notCaptureNext.js";

export const notCaptureNextTests = [
	{
		given: "a number 13",
		must: "not capture next group around 13",
		received: () => notCaptureNext(13),
		wanted: () => "(?!13)",
	},
	{
		given: "a number 1, and a 3",
		must: "not capture next group around 13",
		received: () => notCaptureNext(1, 3),
		wanted: () => "(?!13)",
	},
] satisfies Tests<string>;
