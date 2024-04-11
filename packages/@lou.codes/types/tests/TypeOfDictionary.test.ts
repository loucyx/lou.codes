import type { TypeOfDictionary } from "../src/TypeOfDictionary.js";

export const ok: TypeOfDictionary = {
	bigint: BigInt(0),
	boolean: true,
	function: (input: unknown) => input,
	// eslint-disable-next-line unicorn/no-null
	null: null,
	number: 0,
	object: {},
	string: "🟢",
	symbol: Symbol("🟢"),
	undefined,
};

export const wrong: TypeOfDictionary = {
	// @ts-expect-error `"bigint"` should be a `bigint`.
	bigint: 0,
	// @ts-expect-error `"boolean"` should be a `boolean`.
	boolean: undefined,
	// @ts-expect-error `"function"` should be a `function`.
	function: {},
	// @ts-expect-error `"null"` should be a `null`.
	null: undefined,
	// @ts-expect-error `"number"` should be a `number`.
	number: BigInt(0),
	// @ts-expect-error `"object"` should be an `object`
	// eslint-disable-next-line unicorn/no-null
	object: null,
	// @ts-expect-error `"string"` should be a `string`
	string: new Date(),
	// @ts-expect-error `"symbol"` should be a `symbol`
	symbol: "知る",
	// @ts-expect-error `"undefined"` should be `undefined`
	undefined: "defined!",
};
