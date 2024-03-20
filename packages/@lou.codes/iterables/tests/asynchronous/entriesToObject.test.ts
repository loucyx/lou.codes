import type { Tests } from "@lou.codes/test";
import type { ReadOnlyRecord } from "@lou.codes/types";
import { entriesToObject } from "../../src/asynchronous/entriesToObject.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const stringKey = "key";
const numberKey = 1;
const symbolKey = Symbol("key");
const value = "value";

export const entriesToObjectTests = [
	{
		given: "an array of entries [string, value]",
		must: "return an object with the shape { string: value }",
		received: () => entriesToObject([[stringKey, value] as const]),
		wanted: () => ({ [stringKey]: value }),
	},
	{
		given: "an array of entries [number, value]",
		must: "return an object with the shape { number: value }",
		received: () => entriesToObject([[numberKey, value]]),
		wanted: () => ({ [numberKey]: value }),
	},
	{
		given: "an array of entries [symbol, value]",
		must: "return an object with the shape { symbol: value }",
		received: () => entriesToObject([[symbolKey, value]]),
		wanted: () => ({ [symbolKey]: value }),
	},
	{
		given: "an iterable of entries [string, value]",
		must: "return an object with the shape { string: value }",
		received: () =>
			entriesToObject(toIterable([[stringKey, value] as const])),
		wanted: () => ({ [stringKey]: value }),
	},
	{
		given: "an iterable of entries [number, value]",
		must: "return an object with the shape { number: value }",
		received: () =>
			entriesToObject(toIterable([[numberKey, value] as const])),
		wanted: () => ({ [numberKey]: value }),
	},
	{
		given: "an iterable of entries [symbol, value]",
		must: "return an object with the shape { symbol: value }",
		received: () =>
			entriesToObject(toIterable([[symbolKey, value] as const])),
		wanted: () => ({ [symbolKey]: value }),
	},
	// We have to keep it as `as` because `satisfies` here breaks with symbols.
] as Tests<ReadOnlyRecord<string, string>>;
