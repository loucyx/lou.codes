import { test } from "../src/test.js";
import type { TestResult } from "../src/types/TestResult.js";
import type { Tests } from "../src/types/Tests.js";

export default [
	{
		given: "a passing test",
		must: "return object with given and must",
		received: () =>
			test({
				given: "🟢",
				must: "🟩",
				received: () => "🟩",
				wanted: () => "🟩",
			}),
		wanted: () => ({ given: "🟢", must: "🟩" }),
	},
	{
		given: "a failing test",
		must: "return object with given, must, and differences",
		received: () =>
			test({
				given: "🟢",
				must: "🟩",
				received: () => "❌",
				wanted: () => "🟩",
			}),
		wanted: () => ({
			differences: [{ kind: "E", lhs: "🟩", rhs: "❌" }],
			given: "🟢",
			must: "🟩",
		}),
	},
	{
		given: "a promise throwing test",
		must: "return object with error",
		received: () =>
			test({
				given: "🟢",
				must: "🟩",
				received: () => Promise.reject("❌"),
				wanted: () => "🟩",
			}),
		wanted: () => ({
			differences: [{ error: "❌", kind: "X" }],
			given: "🟢",
			must: "🟩",
		}),
	},
	{
		given: "a throwing test",
		must: "return object with error",
		received: () =>
			test({
				given: "🟢",
				must: "🟩",
				received: () => {
					// eslint-disable-next-line functional/no-throw-statements
					throw new Error("❌");
				},
				wanted: () => "🟩",
			}),
		wanted: () => ({
			differences: [{ error: new Error("❌"), kind: "X" }],
			given: "🟢",
			must: "🟩",
		}),
	},
	{
		given: "a unexpected error throwing test",
		must: "return object with error",
		received: () =>
			test({
				given: "🟢",
				must: "🟩",
				received: () => {
					// eslint-disable-next-line functional/no-throw-statements, no-throw-literal, @typescript-eslint/no-throw-literal
					throw undefined;
				},
				wanted: () => "🟩",
			}),
		wanted: () => ({
			differences: [{ error: Error("Unknown Error"), kind: "X" }],
			given: "🟢",
			must: "🟩",
		}),
	},
	{
		given: "a unexpected error throwing test",
		must: "return object with error",
		received: () =>
			test({
				given: "🟢",
				must: "🟩",
				received: () => ({ "🟢": "🟩" }),
				wanted: () => ({}),
			}),
		wanted: () => ({
			differences: [{ kind: "N", path: ["🟢"], rhs: "🟩" }],
			given: "🟢",
			must: "🟩",
		}),
	},
] satisfies Tests<TestResult>;
