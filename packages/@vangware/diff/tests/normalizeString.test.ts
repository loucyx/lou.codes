import type { UnaryInput } from "@vangware/types";
import { compare } from "../src/compare.js";
import { CREATE, DELETE, UPDATE } from "../src/constants.js";
import { test } from "./test.js";

const arrayCompare = (values: UnaryInput<typeof compare>) => [
	...compare(values),
];

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
);
