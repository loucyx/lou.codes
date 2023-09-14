import type { Tests } from "@vangware/test";
import { isDate } from "../src/isDate.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () => isDate(BigInt(1)) && isDate(BigInt("1")) && isDate(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isDate(true) && isDate(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isDate(new Date()),
		...wantedTrue,
	},
	{
		given: "a function",
		received: () => isDate(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isDate(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isDate(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isDate(/expression/u) && isDate(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isDate("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () => isDate(Symbol("description")) && isDate(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isDate([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isDate({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isDate(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isDate(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
