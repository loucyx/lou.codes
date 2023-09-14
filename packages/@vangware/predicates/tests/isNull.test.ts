import type { Tests } from "@vangware/test";
import { isNull } from "../src/isNull.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () => isNull(BigInt(1)) && isNull(BigInt("1")) && isNull(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isNull(true) && isNull(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isNull(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isNull(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isNull(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isNull(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			// eslint-disable-next-line prefer-regex-literals
			isNull(/expression/u) && isNull(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isNull("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () => isNull(Symbol("description")) && isNull(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isNull([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isNull({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isNull(null),
		...wantedTrue,
	},
	{
		given: "undefined",
		received: () => isNull(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
