import { foregroundRed } from "@lou.codes/ansi";
import type { Tests } from "../src/Tests.js";
import { EXCEPTION } from "../src/constants.js";
import { stringifyTest } from "../src/stringifyTest.js";
import { fail, pass } from "./utils.js";

export const stringifyTestTests = [
	{
		given: "a passing test",
		must: "return a PASS string",
		received: () => stringifyTest({ given: "🟢", must: "🟩" }),
		wanted: () => pass({ given: `🟢`, must: `🟩` }),
	},
	{
		given: "a failing test with empty differences",
		must: "return a FAIL string",
		received: () =>
			stringifyTest({ differences: [], given: "🟢", must: "🟩" }),
		wanted: () => fail({ given: `🟢`, must: `🟩` }),
	},
	{
		given: "a failing test with one difference",
		must: "return a FAIL string",
		received: () =>
			stringifyTest({
				differences: [{ error: new Error("❌"), kind: EXCEPTION }],
				given: "🟢",
				must: "🟩",
			}),
		wanted: () =>
			`${fail({ given: "🟢", must: "🟩" })}${foregroundRed`└`} ${foregroundRed`there was an uncaught error: ❌.`}`,
	},
	{
		given: "a failing test with multiple differences",
		must: "return a FAIL string",
		received: () =>
			stringifyTest({
				differences: [
					{ error: new Error("❌"), kind: EXCEPTION },
					{ error: new Error("❌"), kind: EXCEPTION },
				],
				given: "🟢",
				must: "🟩",
			}),
		wanted: () =>
			`${fail({ given: "🟢", must: "🟩" })}${foregroundRed`├`} ${foregroundRed`there was an uncaught error: ❌.`}\n${foregroundRed`└`} ${foregroundRed`there was an uncaught error: ❌.`}`,
	},
] satisfies Tests<string>;
