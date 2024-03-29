import type { Tests } from "@lou.codes/test";
import { whenIsNull } from "../src/whenIsNull.js";

const whenIsNullTest = whenIsNull(() => "truthy")(() => "falsy");

export const whenIsNullTests = [
	{
		given: "a whenIsNull with null",
		must: "receive the truthy value",
		// eslint-disable-next-line unicorn/no-null
		received: () => whenIsNullTest(null),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsNull without null",
		must: "receive the falsy value",
		received: () => whenIsNullTest("nope"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
