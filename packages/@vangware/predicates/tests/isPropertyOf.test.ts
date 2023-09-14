import type { Tests } from "@vangware/test";
import type { ReadOnlyRecord } from "@vangware/types";
import { isPropertyOf } from "../src/isPropertyOf.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const symbol = Symbol("symbol");
const string = "string";
const number = 1;
const object = {
	[number]: number,
	[string]: string,
	[symbol]: symbol,
} as ReadOnlyRecord;
const isPropertyOfObject = isPropertyOf(object);
const missingSymbol = Symbol("missingSymbol");
const missingString = "missingString";
const missingNumber = 2;

export default [
	{
		given: "a symbol that exist in the given object",
		received: () => isPropertyOfObject(symbol),
		...wantedTrue,
	},
	{
		given: "a string that exist in the given object",
		received: () => isPropertyOfObject(string),
		...wantedTrue,
	},
	{
		given: "a number that exist in the given object",
		received: () => isPropertyOfObject(number),
		...wantedTrue,
	},
	{
		given: "a symbol that doesn't exist in the given object",
		received: () => isPropertyOfObject(missingSymbol),
		...wantedFalse,
	},
	{
		given: "a string that doesn't exist in the given object",
		received: () => isPropertyOfObject(missingString),
		...wantedFalse,
	},
	{
		given: "a number that doesn't exist in the given object",
		received: () => isPropertyOfObject(missingNumber),
		...wantedFalse,
	},
	{
		given: "a string property on an empty object",
		received: () => isPropertyOf({} as ReadOnlyRecord)(string),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
