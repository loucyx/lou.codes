import type { Tests } from "@vangware/test";
import { whenIsNullish } from "../src/whenIsNullish.js";

const whenIsNullishTest = whenIsNullish(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsNullish with nullish value (null)",
		must: "receive the truthy value",
		// eslint-disable-next-line no-null/no-null
		received: () => whenIsNullishTest(null),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsNullish with nullish value (undefined)",
		must: "receive the truthy value",
		received: () => whenIsNullishTest(undefined),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsNullish without nullish",
		must: "receive the falsy value",
		received: () => whenIsNullishTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
