import type { Tests } from "@lou.codes/test";
import { constructPromise } from "../src/constructPromise.js";
import { whenIsPromise } from "../src/whenIsPromise.js";

const whenIsPromiseTest = whenIsPromise(() => "truthy")(() => "falsy");

export const whenIsPromiseTests = [
	{
		given: "a whenIsPromise with a Promise",
		must: "receive the truthy value",
		received: () => whenIsPromiseTest(constructPromise(() => undefined)),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsPromise without a Promise",
		must: "receive the falsy value",
		received: () => whenIsPromiseTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
