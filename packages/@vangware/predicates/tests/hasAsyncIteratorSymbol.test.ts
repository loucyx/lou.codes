import type { Tests } from "@vangware/test";
import { hasAsyncIteratorSymbol } from "../src/hasAsyncIteratorSymbol.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const objectWithAsyncIteratorSymbol = { [Symbol.asyncIterator]: () => void 0 };
const objectWithoutAsyncIteratorSymbol = {};
const array = [] as ReadonlyArray<unknown>;

export default [
	{
		given: "an object with an async iterator symbol",
		received: () => hasAsyncIteratorSymbol(objectWithAsyncIteratorSymbol),
		...wantedTrue,
	},
	{
		given: "an object without an async iterator symbol",
		received: () =>
			hasAsyncIteratorSymbol(objectWithoutAsyncIteratorSymbol),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => hasAsyncIteratorSymbol(array),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
