import type { Tests } from "@vangware/test";
import { isBigInt } from "../src/isBigInt.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isBigInt(BigInt(1)) && isBigInt(BigInt("1")) && isBigInt(1n),
		...wantedTrue,
	},
	{
		given: "a boolean",
		received: () => isBigInt(true) && isBigInt(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isBigInt(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isBigInt(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isBigInt(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isBigInt(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isBigInt(/expression/u) && isBigInt(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isBigInt("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () => isBigInt(Symbol("description")) && isBigInt(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isBigInt([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isBigInt({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isBigInt(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isBigInt(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
