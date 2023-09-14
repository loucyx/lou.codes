import type { Tests } from "@vangware/test";
import { whenIsBoolean } from "../src/whenIsBoolean.js";

const whenIsBooleanTest = whenIsBoolean(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsBoolean with a Boolean",
		must: "receive the truthy value",
		received: () => whenIsBooleanTest(true),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsBoolean without a Boolean",
		must: "receive the falsy value",
		received: () => whenIsBooleanTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
