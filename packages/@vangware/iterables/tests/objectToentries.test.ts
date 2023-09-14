import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { objectToEntries } from "../src/objectToEntries.js";

const symbol = Symbol("🟩");

export default [
	{
		given: "an empty object",
		must: "return an empty array",
		received: () => iterableToArray(objectToEntries({})),
		wanted: () => [],
	},
	{
		given: "an object with a single property",
		must: "return an array with a single tuple",
		received: () => iterableToArray(objectToEntries({ "🟩": "🟢" })),
		wanted: () => [["🟩", "🟢"]],
	},
	{
		given: "an object with a few properties",
		must: "return an array with a few tuples",
		received: () =>
			iterableToArray(objectToEntries({ "💚": "✅", "🟩": "🟢" })),
		wanted: () => [
			["💚", "✅"],
			["🟩", "🟢"],
		],
	},
	{
		given: "an object with a number property",
		must: "return an array with a tuple with that number turned intro a string",
		received: () => iterableToArray(objectToEntries({ 0: "🟢" })),
		wanted: () => [["0", "🟢"]],
	},
	{
		given: "an object with a symbol property",
		must: "return that symbol entry",
		received: () => iterableToArray(objectToEntries({ [symbol]: "🟢" })),
		wanted: () => [[symbol, "🟢"]],
	},
] satisfies Tests<ReadOnlyArray>;
