import type { Tests } from "@vangware/test";
import { has } from "../src/has.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const string = "foo";
const symbol = Symbol(string);
const number = 1;

const objectWithString = { [string]: string };
const objectWithSymbol = { [symbol]: symbol };
const objectWithNumber = { [number]: number };
const arrayWith2Items = [string, string];
const arrayWith1Item = [string];
const emptyObject = {};
const emptyArray = [] as const;

export default [
	{
		given: "an object with string key when looking for a string key",
		received: () => has(string)(objectWithString),
		...wantedTrue,
	},
	{
		given: "an object with symbol key when looking for a symbol key",
		received: () => has(symbol)(objectWithSymbol),
		...wantedTrue,
	},
	{
		given: "an object with number key when looking for a number key",
		received: () => has(number)(objectWithNumber),
		...wantedTrue,
	},
	{
		given: "an array with number key when looking for a number key",
		received: () => has(number)(arrayWith2Items),
		...wantedTrue,
	},
	{
		given: "an array without number key when looking for a number key",
		received: () => has(number)(arrayWith1Item),
		...wantedFalse,
	},
	{
		given: "an empty array looking for a number key",
		received: () => has(number)(emptyArray),
		...wantedFalse,
	},
	{
		given: "an empty object when looking for a string key",
		received: () => has(string)(emptyObject),
		...wantedFalse,
	},
	{
		given: "an empty object when looking for a symbol key",
		received: () => has(symbol)(emptyObject),
		...wantedFalse,
	},
	{
		given: "an empty object when looking for a number key",
		received: () => has(number)(emptyObject),
		...wantedFalse,
	},
	{
		given: "an object with symbol key when looking for a string key",
		received: () => has(string)(objectWithSymbol),
		...wantedFalse,
	},
	{
		given: "an object with number key when looking for a symbol key",
		received: () => has(symbol)(objectWithNumber),
		...wantedFalse,
	},
	{
		given: "an object with string key when looking for a number key",
		received: () => has(number)(objectWithString),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
