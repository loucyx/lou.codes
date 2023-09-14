import type { Tests } from "@vangware/test";
import { whenIsBigInt } from "../src/whenIsBigInt.js";

const whenIsBigIntTest = whenIsBigInt(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsBigInt with a BigInt",
		must: "receive the truthy value",
		received: () => whenIsBigIntTest(13n),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsBigInt without a BigInt",
		must: "receive the falsy value",
		received: () => whenIsBigIntTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
