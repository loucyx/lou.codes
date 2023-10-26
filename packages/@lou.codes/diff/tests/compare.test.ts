import type { UnaryInput } from "@lou.codes/types";
import { compare } from "../src/compare.js";
import { CREATE, DELETE, UPDATE } from "../src/constants.js";
import { test } from "./test.js";

const arrayCompare = (values: UnaryInput<typeof compare>) => [
	...compare(values),
];

const now = Date.now();
const error = new Error("🟢");

export default test(import.meta.url)(
	{
		given: "two equal strings",
		must: "empty diff",
		received: () => arrayCompare({ left: "🟢", right: "🟢" }),
		wanted: () => [],
	},
	{
		given: "two different strings",
		must: "return differences",
		received: () => arrayCompare({ left: "🟢", right: "❌" }),
		wanted: () => [{ kind: UPDATE, left: "🟢", path: [], right: "❌" }],
	},
	{
		given: "two equal arrays",
		must: "empty diff",
		received: () => arrayCompare({ left: ["🟢"], right: ["🟢"] }),
		wanted: () => [],
	},
	{
		given: "two different arrays",
		must: "return differences",
		received: () => arrayCompare({ left: ["🟢"], right: ["❌"] }),
		wanted: () => [{ kind: UPDATE, left: "🟢", path: [0], right: "❌" }],
	},
	{
		given: "two equal objects",
		must: "empty diff",
		received: () =>
			arrayCompare({ left: { foo: "🟢" }, right: { foo: "🟢" } }),
		wanted: () => [],
	},
	{
		given: "two different objects",
		must: "return differences",
		received: () =>
			arrayCompare({ left: { foo: "🟢" }, right: { foo: "❌" } }),
		wanted: () => [
			{ kind: UPDATE, left: "🟢", path: ["foo"], right: "❌" },
		],
	},
	{
		given: "two objects with different keys",
		must: "return differences",
		received: () =>
			arrayCompare({ left: { foo: "🟢" }, right: { bar: "🟢" } }),
		wanted: () => [
			{ kind: DELETE, left: "🟢", path: ["foo"] },
			{ kind: CREATE, path: ["bar"], right: "🟢" },
		],
	},
	{
		given: "right array with an extra item",
		must: "return differences",
		received: () =>
			arrayCompare({
				left: [{ foo: "🟢" }],
				right: [{ foo: "🟢" }, { bar: "❌" }],
			}),
		wanted: () => [{ kind: CREATE, path: [1], right: { bar: "❌" } }],
	},
	{
		given: "left array with an extra item",
		must: "return differences",
		received: () =>
			arrayCompare({
				left: [{ foo: "🟢" }, { bar: "❌" }],
				right: [{ foo: "🟢" }],
			}),
		wanted: () => [{ kind: DELETE, left: { bar: "❌" }, path: [1] }],
	},
	{
		given: "two equal dates",
		must: "empty diff",
		received: () =>
			arrayCompare({ left: new Date(now), right: new Date(now) }),
		wanted: () => [],
	},
	{
		given: "two equal RegExps",
		must: "empty diff",
		received: () => arrayCompare({ left: /lou/gu, right: /lou/gu }),
		wanted: () => [],
	},
	{
		given: "two equal URLs",
		must: "empty diff",
		received: () =>
			arrayCompare({
				left: new URL("https://lou.codes"),
				right: new URL("https://lou.codes"),
			}),
		wanted: () => [],
	},
	{
		given: "two equal Errors",
		must: "empty diff",
		received: () => arrayCompare({ left: error, right: error }),
		wanted: () => [],
	},
	{
		given: "two equal Maps",
		must: "empty diff",
		received: () =>
			arrayCompare({
				left: new Map([["foo", "🟢"]]),
				right: new Map([["foo", "🟢"]]),
			}),
		wanted: () => [],
	},
	{
		given: "two equal Sets",
		must: "empty diff",
		received: () =>
			arrayCompare({
				left: new Set(["🟢"]),
				right: new Set(["🟢"]),
			}),
		wanted: () => [],
	},
);
