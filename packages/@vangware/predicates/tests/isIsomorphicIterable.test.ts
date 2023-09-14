import type { Tests } from "@vangware/test";
import { isIsomorphicIterable } from "../src/isIsomorphicIterable.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a BigInt",
		received: () =>
			isIsomorphicIterable(BigInt(1)) &&
			isIsomorphicIterable(BigInt("1")) &&
			isIsomorphicIterable(1n),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: () =>
			isIsomorphicIterable(true) && isIsomorphicIterable(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: () => isIsomorphicIterable(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		received: () => isIsomorphicIterable(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: () => isIsomorphicIterable(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: () => isIsomorphicIterable(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () =>
			isIsomorphicIterable(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isIsomorphicIterable(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: () => isIsomorphicIterable("string"),
		...wantedTrue,
	},
	{
		given: "a symbol",
		received: () =>
			isIsomorphicIterable(Symbol("description")) &&
			isIsomorphicIterable(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => isIsomorphicIterable([]),
		...wantedTrue,
	},
	{
		given: "an object with a Symbol.iterator property",
		received: () =>
			isIsomorphicIterable({ [Symbol.iterator]: () => void 0 }),
		...wantedTrue,
	},
	{
		given: "an object with a Symbol.asyncIterator property",
		received: () =>
			isIsomorphicIterable({
				[Symbol.asyncIterator]: () => void 0,
			}),
		...wantedTrue,
	},
	{
		given: "an object",
		received: () => isIsomorphicIterable({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isIsomorphicIterable(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: () => isIsomorphicIterable(undefined),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
