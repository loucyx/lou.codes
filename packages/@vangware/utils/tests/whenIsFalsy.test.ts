import type { Tests } from "@vangware/test";
import { whenIsFalsy } from "../src/whenIsFalsy.js";

const whenIsFalsyTest = whenIsFalsy(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsFalsy with a falsy value (false)",
		must: "receive the truthy value",
		received: () => whenIsFalsyTest(false),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsFalsy with a falsy value (0)",
		must: "receive the truthy value",
		received: () => whenIsFalsyTest(0),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsFalsy with a falsy value (empty string)",
		must: "receive the truthy value",
		received: () => whenIsFalsyTest(""),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsFalsy without an Falsy",
		must: "receive the falsy value",
		received: () => whenIsFalsyTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
