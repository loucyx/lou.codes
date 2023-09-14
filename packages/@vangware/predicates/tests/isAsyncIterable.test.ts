import type { Tests } from "@vangware/test";
import { isAsyncIterable } from "../src/isAsyncIterable.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isAsyncIterable(BigInt(1)) &&
			isAsyncIterable(BigInt("1")) &&
			isAsyncIterable(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () => isAsyncIterable(true) && isAsyncIterable(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isAsyncIterable(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isAsyncIterable(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isAsyncIterable(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isAsyncIterable(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			isAsyncIterable(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isAsyncIterable(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isAsyncIterable("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: () =>
			isAsyncIterable(Symbol("description")) &&
			isAsyncIterable(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isAsyncIterable([]),
		...wantedFalse,
	},
	{
		given: "an object with a Symbol.iterator property",
		received: () => isAsyncIterable({ [Symbol.iterator]: () => void 0 }),
		...wantedFalse,
	},
	{
		given: "an object with a Symbol.asyncIterator property",
		received: () =>
			isAsyncIterable({
				[Symbol.asyncIterator]: () => void 0,
			}),
		...wantedTrue,
	},
	{
		given: "an object",
		received: () => isAsyncIterable({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isAsyncIterable(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isAsyncIterable(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
