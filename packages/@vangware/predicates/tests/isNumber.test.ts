import type { Tests } from "@vangware/test";
import { isNumber } from "../src/isNumber.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isNumber(BigInt(1)) && isNumber(BigInt("1")) && isNumber(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isNumber(true) && isNumber(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isNumber(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isNumber(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isNumber(1),
		...wantedTrue,
	},
	{
		given: "a promise",
		received: () => isNumber(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isNumber(/expression/u) && isNumber(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isNumber("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () => isNumber(Symbol("description")) && isNumber(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isNumber([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isNumber({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isNumber(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isNumber(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
