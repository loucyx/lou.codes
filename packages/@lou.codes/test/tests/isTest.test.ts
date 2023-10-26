import { isTest } from "../src/isTest.js";
import type { Tests } from "../src/types/Tests.js";

export default [
	{
		given: "a valid Test object",
		must: "return true",
		received: () =>
			isTest({
				given: "🟢",
				must: "🟩",
				received: () => "🟩",
				wanted: () => "🟩",
			}),
		wanted: () => true,
	},
	{
		given: "an invalid Test object",
		must: "return false",
		received: () =>
			isTest({ given: 1, must: 2, received: () => 3, wanted: () => 4 }),
		wanted: () => false,
	},
	{
		given: "an empty Test object",
		must: "return false",
		received: () => isTest({}),
		wanted: () => false,
	},
	{
		given: "no arguments",
		must: "return false",
		received: () => isTest(undefined),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
