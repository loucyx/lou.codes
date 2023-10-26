import { CREATE, UPDATE } from "@lou.codes/diff";
import { EXCEPTION, UNKNOWN_ERROR } from "../src/constants.js";
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
			differences: [{ kind: UPDATE, left: "🟩", path: [], right: "❌" }],
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
			differences: [{ error: "❌", kind: EXCEPTION }],
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
			differences: [{ error: "Error: ❌", kind: EXCEPTION }],
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
			differences: [{ error: UNKNOWN_ERROR, kind: EXCEPTION }],
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
			differences: [{ kind: CREATE, path: ["🟢"], right: "🟩" }],
			given: "🟢",
			must: "🟩",
		}),
	},
] satisfies Tests<TestResult>;
