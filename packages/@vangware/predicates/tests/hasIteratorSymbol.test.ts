import type { Tests } from "@vangware/test";
import { hasIteratorSymbol } from "../src/hasIteratorSymbol.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const objectWithIteratorSymbol = { [Symbol.iterator]: () => void 0 };
const objectWithoutIteratorSymbol = {};
const array = [] as ReadonlyArray<unknown>;

export default [
	{
		given: "an object with an  iterator symbol",
		received: () => hasIteratorSymbol(objectWithIteratorSymbol),
		...wantedTrue,
	},
	{
		given: "an object without an  iterator symbol",
		received: () => hasIteratorSymbol(objectWithoutIteratorSymbol),
		...wantedFalse,
	},
	{
		given: "an array",
		received: () => hasIteratorSymbol(array),
		...wantedTrue,
	},
] satisfies Tests<boolean>;
