import type { Tests } from "@lou.codes/test";
import type { ReadOnlyRecord } from "@lou.codes/types";
import { entriesToObject } from "../src/entriesToObject.js";
import { iterateArray } from "./utils.js";

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
			entriesToObject(iterateArray([[stringKey, value] as const])),
		wanted: () => ({ [stringKey]: value }),
	},
	{
		given: "an iterable of entries [number, value]",
		must: "return an object with the shape { number: value }",
		received: () =>
			entriesToObject(iterateArray([[numberKey, value] as const])),
		wanted: () => ({ [numberKey]: value }),
	},
	{
		given: "an iterable of entries [symbol, value]",
		must: "return an object with the shape { symbol: value }",
		received: () =>
			entriesToObject(iterateArray([[symbolKey, value] as const])),
		wanted: () => ({ [symbolKey]: value }),
	},
	// We have to keep it as `as` because `satisfies` here breaks with symbols.
] as Tests<ReadOnlyRecord<string, string>>;
