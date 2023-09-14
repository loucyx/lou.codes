import type { Tests } from "@vangware/test";
import { isIterable } from "../src/isIterable.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isIterable(BigInt(1)) && isIterable(BigInt("1")) && isIterable(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isIterable(true) && isIterable(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isIterable(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isIterable(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isIterable(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isIterable(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			isIterable(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isIterable(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isIterable("string"),
		...wantedTrue,
	},
	{
		given: "a symbol",
		received: () =>
			isIterable(Symbol("description")) && isIterable(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isIterable([]),
		...wantedTrue,
	},
	{
		given: "an object with a Symbol.iterator property",
		received: () => isIterable({ [Symbol.iterator]: () => void 0 }),
		...wantedTrue,
	},
	{
		given: "an object with a Symbol.asyncIterator property",
		received: () =>
			isIterable({
				[Symbol.asyncIterator]: () => void 0,
			}),
		...wantedFalse,
	},
	{
		given: "an object",
		received: () => isIterable({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isIterable(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isIterable(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
