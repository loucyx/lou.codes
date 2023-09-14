import type { Tests } from "@vangware/test";
import { isFunction } from "../src/isFunction.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isFunction(BigInt(1)) && isFunction(BigInt("1")) && isFunction(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isFunction(true) && isFunction(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isFunction(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isFunction(() => undefined),
		...wantedTrue,
	},
	{
		given: "a number",
		received: () => isFunction(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isFunction(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			isFunction(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isFunction(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isFunction("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () =>
			isFunction(Symbol("description")) && isFunction(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isFunction([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isFunction({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isFunction(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isFunction(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
