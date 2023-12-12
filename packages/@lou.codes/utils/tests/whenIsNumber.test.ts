import type { Tests } from "@lou.codes/test";
import { whenIsNumber } from "../src/whenIsNumber.js";

const whenIsNumberTest = whenIsNumber(() => "truthy")(() => "falsy");

export const whenIsNumberTests = [
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
