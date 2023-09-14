import type { Tests } from "@vangware/test";
import { whenIsPropertyKey } from "../src/whenIsPropertyKey.js";

const whenIsPropertyKeyTest = whenIsPropertyKey(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsPropertyKey with a PropertyKey (string)",
		must: "receive the truthy value",
		received: () => whenIsPropertyKeyTest("key"),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsPropertyKey with a PropertyKey (number)",
		must: "receive the truthy value",
		received: () => whenIsPropertyKeyTest(13),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsPropertyKey with a PropertyKey (symbol)",
		must: "receive the truthy value",
		received: () => whenIsPropertyKeyTest(Symbol("test")),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsPropertyKey without a Promise",
		must: "receive the falsy value",
		received: () => whenIsPropertyKeyTest([]),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
