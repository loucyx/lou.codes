import {
	foregroundBrightRed,
	foregroundCyan,
	foregroundRed,
} from "@vangware/ansi";
import { stringifyDifference } from "../src/stringifyDifference.js";
import type { Tests } from "../src/types/Tests.js";

export default [
	{
		given: "an array difference",
		must: `return stringified differences`,
		received: () =>
			stringifyDifference({
				index: 0,
				item: { kind: "E", lhs: "🟢", rhs: "❌" },
				kind: "A",
				path: ["🟢"],
			}),
		wanted: () =>
			`${foregroundCyan`🟢`}.${foregroundCyan`0`} has the wrong value. Wanted ${foregroundBrightRed`"🟢"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "a deletion difference",
		must: `return stringified difference`,
		received: () =>
			stringifyDifference({
				kind: "D",
				lhs: "🟢",
				path: ["🟢", "🟩"],
			}),
		wanted: () => `${foregroundCyan`🟢`}.${foregroundCyan`🟩`} is missing.`,
	},
	{
		given: "an edit difference",
		must: `return stringified difference`,
		received: () =>
			stringifyDifference({
				kind: "E",
				lhs: "🟢",
				path: ["🟢", "🟩"],
				rhs: "❌",
			}),
		wanted: () =>
			`${foregroundCyan`🟢`}.${foregroundCyan`🟩`} has the wrong value. Wanted ${foregroundBrightRed`"🟢"`} but received ${foregroundBrightRed`"❌"`}.`,
	},
	{
		given: "a new difference",
		must: `return stringified difference`,
		received: () =>
			stringifyDifference({
				kind: "N",
				path: ["🟢", "🟩"],
				rhs: "🟢",
			}),
		wanted: () =>
			`${foregroundCyan`🟢`}.${foregroundCyan`🟩`} was set with value ${foregroundBrightRed`"🟢"`}.`,
	},
	{
		given: "an Error difference",
		must: `return stringified difference`,
		received: () =>
			stringifyDifference({
				error: new Error("❌"),
				kind: "X",
			}),
		wanted: () => foregroundRed`there was an uncaught error: ❌.`,
	},
	{
		given: "a plain error difference",
		must: `return stringified difference`,
		received: () =>
			stringifyDifference({
				error: "❌",
				kind: "X",
			}),
		wanted: () => foregroundRed`there was an uncaught error: ❌.`,
	},
] satisfies Tests<string>;
