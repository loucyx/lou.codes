import type { Tests } from "@vangware/test";
import { isSymbol } from "../src/isSymbol.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () => isSymbol(BigInt(1)) && isSymbol(BigInt("1")),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isSymbol(true) && isSymbol(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isSymbol(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isSymbol(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isSymbol(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isSymbol(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isSymbol(/expression/u) && isSymbol(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isSymbol("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () => isSymbol(Symbol("description")) && isSymbol(Symbol(1)),
		...wantedTrue,
	},
	{
		given: "an array",
		received: () => isSymbol([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isSymbol({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isSymbol(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isSymbol(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
