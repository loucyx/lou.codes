import type { Tests } from "@vangware/test";
import { isBoolean } from "../src/isBoolean.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isBoolean(BigInt(1)) && isBoolean(BigInt("1")) && isBoolean(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isBoolean(true) && isBoolean(false),
		...wantedTrue,
	},
	{
		given: "a date",
		received: () => isBoolean(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isBoolean(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isBoolean(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isBoolean(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			isBoolean(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isBoolean(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isBoolean("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () =>
			isBoolean(Symbol("description")) && isBoolean(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isBoolean([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isBoolean({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isBoolean(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isBoolean(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
