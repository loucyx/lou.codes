import type { Tests } from "@lou.codes/test";
import { whenIsObject } from "../src/whenIsObject.js";

const whenIsObjectTest = whenIsObject(() => "truthy")(() => "falsy");

export const whenIsObjectTests = [
	{
		given: "a whenIsObject with an object",
		must: "receive the truthy value",
		received: () => whenIsObjectTest({}),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsObject without an object",
		must: "receive the falsy value",
		received: () => whenIsObjectTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
