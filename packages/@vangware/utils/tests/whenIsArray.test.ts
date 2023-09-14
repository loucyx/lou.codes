import type { Tests } from "@vangware/test";
import { whenIsArray } from "../src/whenIsArray.js";

const whenIsArrayTest = whenIsArray(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsArray with an array",
		must: "receive the truthy value",
		received: () => whenIsArrayTest([]),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsArray without an array",
		must: "receive the falsy value",
		received: () => whenIsArrayTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
