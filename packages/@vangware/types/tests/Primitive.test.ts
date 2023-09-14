import type { Primitive } from "../src/Primitive.js";

export const stringEmpty: Primitive = "";
export const stringNotEmpty: Primitive = "vangware";

export const number: Primitive = 0;
export const negativeNumber: Primitive = -1;
export const infinity: Primitive = Infinity;
export const notANumber: Primitive = NaN;
export const float: Primitive = 0.5;
export const expression: Primitive = 1 + 1;
// eslint-disable-next-line no-null/no-null
export const nullValue: Primitive = null;

export const bigInt: Primitive = BigInt(0);

export const yup: Primitive = true;
export const nope: Primitive = false;
export const comparison: Primitive = 1 * 1 === 1;

export const symbol: Primitive = Symbol("vangware");

export const notDefined: Primitive = undefined;
export const voidZero: Primitive = void 0;

// @ts-expect-error Object is not primitive.
export const object: Primitive = {};

// @ts-expect-error Object is not primitive.
export const array: Primitive = [];

// @ts-expect-error Function is not primitive.
export const idFunction: Primitive = <Input>(input: Input) => input;
