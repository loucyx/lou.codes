import type { Tests } from "@lou.codes/test";
import { whenIsBigInt } from "../src/whenIsBigInt.js";

const whenIsBigIntTest = whenIsBigInt(() => "truthy")(() => "falsy");

export const whenIsBigIntTests = [
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
