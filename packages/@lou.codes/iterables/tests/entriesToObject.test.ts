import type { Tests } from "@lou.codes/test";
import type { ReadOnlyRecord } from "@lou.codes/types";
import { entriesToObject } from "../src/entriesToObject.js";
import { asyncIterateArray, iterateArray } from "./utils.js";

const stringKey = "key" as const;
const numberKey = 1 as const;
const symbolKey = Symbol("key");
const value = "value" as const;

export default [
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
	{
		given: "an async iterable of entries [string, value]",
		must: "return an object with the shape { string: value }",
		received: () =>
			entriesToObject(asyncIterateArray([[stringKey, value] as const])),
		wanted: () => ({ [stringKey]: value }),
	},
	{
		given: "an async iterable of entries [number, value]",
		must: "return an object with the shape { number: value }",
		received: () =>
			entriesToObject(asyncIterateArray([[numberKey, value] as const])),
		wanted: () => ({ [numberKey]: value }),
	},
	{
		given: "an async iterable of entries [symbol, value]",
		must: "return an object with the shape { symbol: value }",
		received: () =>
			entriesToObject(asyncIterateArray([[symbolKey, value] as const])),
		wanted: () => ({ [symbolKey]: value }),
	},
	// We have to keep it as `as` because `satisfies` here breaks with symbols.
] as Tests<ReadOnlyRecord<string, string>>;
