import type { Tests } from "@lou.codes/test";
import { whenIsSafeInteger } from "../src/whenIsSafeInteger.js";

const whenIsSafeIntegerTest = whenIsSafeInteger(() => "truthy")(() => "falsy");

export const whenIsSafeIntegerTests = [
	{
		given: "a whenIsSafeInteger with a safe integer",
		must: "receive the truthy value",
		received: () => whenIsSafeIntegerTest(10),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsSafeInteger without a safe integer",
		must: "receive the falsy value",
		received: () => whenIsSafeIntegerTest(13.13),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
