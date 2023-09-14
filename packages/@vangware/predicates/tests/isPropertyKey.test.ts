import type { Tests } from "@vangware/test";
import { isPropertyKey } from "../src/isPropertyKey.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isPropertyKey(BigInt(1)) &&
			isPropertyKey(BigInt("1")) &&
			isPropertyKey(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isPropertyKey(true) && isPropertyKey(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isPropertyKey(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isPropertyKey(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isPropertyKey(1),
		...wantedTrue,
	},
	{
		given: "a promise",
		received: () => isPropertyKey(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			isPropertyKey(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isPropertyKey(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isPropertyKey("string"),
		...wantedTrue,
	},
	{
		given: "a symbol",
		received: () =>
			isPropertyKey(Symbol("description")) && isPropertyKey(Symbol(1)),
		...wantedTrue,
	},
	{
		given: "an array",
		received: () => isPropertyKey([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isPropertyKey({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isPropertyKey(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isPropertyKey(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
