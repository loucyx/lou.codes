import type { Tests } from "@lou.codes/test";
import { whenIsFunction } from "../src/whenIsFunction.js";

const whenIsFunctionTest = whenIsFunction(() => "truthy")(() => "falsy");

export const whenIsFunctionTests = [
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
