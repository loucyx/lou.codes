import type { Tests } from "@vangware/test";
import { whenIsNumber } from "../src/whenIsNumber.js";

const whenIsNumberTest = whenIsNumber(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsNumber with a number",
		must: "receive the truthy value",
		received: () => whenIsNumberTest(13),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsNumber without a number",
		must: "receive the falsy value",
		received: () => whenIsNumberTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
