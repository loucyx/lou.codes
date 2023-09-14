import type { Tests } from "@vangware/test";
import { isType } from "../src/isType.js";
import { wantedTrue } from "./wanted.js";

const isBigInt = isType("bigint");
const isBoolean = isType("boolean");
const isFunction = isType("function");
const isNull = isType("null");
const isNumber = isType("number");
const isObject = isType("object");
const isString = isType("string");
const isSymbol = isType("symbol");
const isUndefined = isType("undefined");

export default [
	{
		given: "a BigInt",
		received: () =>
			isBigInt(BigInt(1)) && isBigInt(BigInt("1")) && isBigInt(1n),
		...wantedTrue,
	},
	{
		given: "a boolean",
		received: () => isBoolean(true) && isBoolean(false),
		...wantedTrue,
	},
	{
		given: "a function",
		received: () => isFunction(isFunction),
		...wantedTrue,
	},
	{
		given: "a number",
		received: () => isNumber(1),
		...wantedTrue,
	},
	{
		given: "a string",
		received: () => isString("string"),
		...wantedTrue,
	},
	{
		given: "a symbol",
		received: () => isSymbol(Symbol("description")) && isSymbol(Symbol(1)),
		...wantedTrue,
	},
	{
		given: "an object",
		received: () => isObject({}),
		...wantedTrue,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: () => isNull(null),
		...wantedTrue,
	},
	{
		given: "undefined",
		received: () => isUndefined(undefined),
		...wantedTrue,
	},
] satisfies Tests<boolean>;
