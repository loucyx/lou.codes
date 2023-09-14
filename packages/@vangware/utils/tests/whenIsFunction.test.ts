import type { Tests } from "@vangware/test";
import { whenIsFunction } from "../src/whenIsFunction.js";

const whenIsFunctionTest = whenIsFunction(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsFunction with a function",
		must: "receive the truthy value",
		received: () => whenIsFunctionTest(() => undefined),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsFunction without a function",
		must: "receive the falsy value",
		received: () => whenIsFunctionTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
