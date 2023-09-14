import type { JSONValue } from "../src/JSONValue.js";

export const string: JSONValue = "vangware";
export const number: JSONValue = 13;
export const boolean: JSONValue = false;
export const emptyArray: JSONValue = [];
export const array: JSONValue = [string, number, boolean];
export const emptyObject: JSONValue = {};
export const object: JSONValue = { [string]: number };
// eslint-disable-next-line no-null/no-null
export const aNull: JSONValue = null;

// @ts-expect-error Symbols aren't valid JSON values
export const symbol: JSONValue = Symbol("symbol");

// @ts-expect-error Functions aren't valid JSON values
export const aFunction: JSONValue = () => undefined;

// @ts-expect-error Undefined isn't a valid JSON value
export const undefinedValue: JSONValue = undefined;

// @ts-expect-error BigInts aren't valid JSON values
export const bigInt: JSONValue = 13n;

// @ts-expect-error Dates aren't valid JSON values
export const date: JSONValue = new Date();

// @ts-expect-error RegExps aren't valid JSON values
export const regExp: JSONValue = /regexp/u;

// @ts-expect-error Errors aren't valid JSON values
export const error: JSONValue = new Error("error");

// @ts-expect-error Maps aren't valid JSON values
export const map: JSONValue = new Map();

// @ts-expect-error Sets aren't valid JSON values
export const set: JSONValue = new Set();

// @ts-expect-error Invalid values aren't valid as properties
export const invalidProperty: JSONValue = { [string]: Symbol("symbol") };

// @ts-expect-error Invalid values aren't valid as indexes
export const invalidIndex: JSONValue = [Symbol("symbol")];
