import type { Tests } from "@vangware/test";
import { whenIsUndefined } from "../src/whenIsUndefined.js";

const whenIsUndefinedTest = whenIsUndefined(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsUndefined with an undefined value",
		must: "receive the truthy value",
		received: () => whenIsUndefinedTest(undefined),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsUndefined without an undefined value",
		must: "receive the falsy value",
		received: () => whenIsUndefinedTest(""),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
