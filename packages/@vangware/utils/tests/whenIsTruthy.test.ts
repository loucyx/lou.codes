import type { Tests } from "@vangware/test";
import { whenIsTruthy } from "../src/whenIsTruthy.js";

const whenIsTruthyTest = whenIsTruthy(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsTruthy with a truthy value (true)",
		must: "receive the truthy value",
		received: () => whenIsTruthyTest(true),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsTruthy with a truthy value (13)",
		must: "receive the truthy value",
		received: () => whenIsTruthyTest(13),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsTruthy with a truthy value (string)",
		must: "receive the truthy value",
		received: () => whenIsTruthyTest("foo"),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsTruthy without a truthy value",
		must: "receive the falsy value",
		received: () => whenIsTruthyTest(""),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
