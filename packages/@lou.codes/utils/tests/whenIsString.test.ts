import type { Tests } from "@lou.codes/test";
import { whenIsString } from "../src/whenIsString.js";

const whenIsStringTest = whenIsString(() => "truthy")(() => "falsy");

export const whenIsStringTests = [
	{
		given: "a whenIsString with a string",
		must: "receive the truthy value",
		received: () => whenIsStringTest("test"),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsString without a string",
		must: "receive the falsy value",
		received: () => whenIsStringTest(13),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
