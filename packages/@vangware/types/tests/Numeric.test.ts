import type { Numeric } from "../src/Numeric.js";

export const number: Numeric = 0;
export const negativeNumber: Numeric = -1;
export const infinity: Numeric = Infinity;
export const notANumber: Numeric = NaN;
export const float: Numeric = 0.5;
export const expression: Numeric = 1 + 1;

export const bigInt: Numeric = BigInt(0);

// @ts-expect-error String is not a numeric type.
export const stringEmpty: Numeric = "";

// @ts-expect-error String is not a numeric type.
export const stringNotEmpty: Numeric = "vangware";

// @ts-expect-error null is not a numeric type.
// eslint-disable-next-line no-null/no-null
export const nullValue: Numeric = null;

// @ts-expect-error Boolean is not a numeric type.
export const yup: Numeric = true;

// @ts-expect-error Boolean is not a numeric type.
export const nope: Numeric = false;

// @ts-expect-error Boolean is not a numeric type.
export const comparison: Numeric = 1 * 1 === 1;

// @ts-expect-error Symbol is not a numeric type.
export const symbol: Numeric = Symbol("vangware");

// @ts-expect-error Undefined is not a numeric type.
export const notDefined: Numeric = undefined;

// @ts-expect-error Undefined is not a numeric type.
export const voidZero: Numeric = void 0;

// @ts-expect-error Object is not a numeric type.
export const object: Numeric = {};

// @ts-expect-error Object is not a numeric type.
export const array: Numeric = [];

// @ts-expect-error Function is not a numeric type.
export const idFunction: Numeric = <Input>(input: Input) => input;
