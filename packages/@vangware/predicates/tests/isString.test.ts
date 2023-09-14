import type { Tests } from "@vangware/test";
import { isString } from "../src/isString.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isString(BigInt(1)) && isString(BigInt("1")) && isString(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isString(true) && isString(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isString(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isString(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isString(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isString(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isString(/expression/u) && isString(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isString("string"),
		...wantedTrue,
	},
	{
		given: "a symbol",
		received: () => isString(Symbol("description")) && isString(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isString([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isString({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isString(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isString(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
