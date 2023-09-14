import type { Tests } from "@vangware/test";
import { isObject } from "../src/isObject.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isObject(BigInt(1)) && isObject(BigInt("1")) && isObject(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isObject(true) && isObject(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isObject(new Date()),
		...wantedTrue,
	},
	{
		given: "a function",
		received: () => isObject(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isObject(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isObject(Promise.resolve()),
		...wantedTrue,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isObject(/expression/u) && isObject(new RegExp("expression", "u")),
		...wantedTrue,
	},
	{
		given: "a string",
		received: () => isObject("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () => isObject(Symbol("description")) && isObject(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isObject([]),
		...wantedTrue,
	},
	{
		given: "an object",
		received: () => isObject({}),
		...wantedTrue,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isObject(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isObject(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
