import type { Tests } from "@lou.codes/test";
import { whenIsPromise } from "../src/whenIsPromise.js";

const whenIsPromiseTest = whenIsPromise(() => "truthy")(() => "falsy");

export const whenIsPromiseTests = [
	{
		given: "a whenIsPromise with a Promise",
		must: "receive the truthy value",
		received: () => whenIsPromiseTest(new Promise(() => undefined)),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsPromise without a Promise",
		must: "receive the falsy value",
		received: () => whenIsPromiseTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
