import { CREATE, UPDATE } from "@lou.codes/diff";
import type { TestResult } from "../src/TestResult.js";
import type { Tests } from "../src/Tests.js";
import { EXCEPTION, UNKNOWN_ERROR } from "../src/constants.js";
import { evaluate } from "../src/evaluate.js";

export const testTests = [
	{
		given: "a passing test",
		must: "return object with given and must",
		received: () =>
			evaluate({
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
			evaluate({
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
			evaluate({
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
			evaluate({
				given: "🟢",
				must: "🟩",
				received: () => {
					// eslint-disable-next-line functional/no-throw-statements
					throw Object.assign(new Error("❌"), {
						stack: "\n\tat test.test.ts",
					});
				},
				wanted: () => "🟩",
			}),
		wanted: () => ({
			differences: [
				{ error: "Error: ❌ (at test.test.ts)", kind: EXCEPTION },
			],
			given: "🟢",
			must: "🟩",
		}),
	},
	{
		given: "a unexpected error throwing test",
		must: "return object with error",
		received: () =>
			evaluate({
				given: "🟢",
				must: "🟩",
				received: () => {
					// eslint-disable-next-line functional/no-throw-statements, @typescript-eslint/only-throw-error
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
			evaluate({
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
