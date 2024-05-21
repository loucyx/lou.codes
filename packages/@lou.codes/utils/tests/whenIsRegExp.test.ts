import type { Tests } from "@lou.codes/test";
import { whenIsRegExp } from "../src/whenIsRegExp.js";

const whenIsRegExpTest = whenIsRegExp(() => "truthy")(() => "falsy");

export const whenIsRegExpTests = [
	{
		given: "a whenIsRegExp with a RegExp",
		must: "receive the truthy value",
		received: () => whenIsRegExpTest(/./u),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsRegExp without a Promise",
		must: "receive the falsy value",
		received: () => whenIsRegExpTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
