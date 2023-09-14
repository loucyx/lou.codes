import type { Nullish } from "../src/Nullish.js";

// eslint-disable-next-line no-null/no-null
export const nullValue: Nullish = null;
export const notDefined: Nullish = undefined;
export const voidZero: Nullish = void 0;

// @ts-expect-error Number is not a nullish type.
export const number: Nullish = 0;

// @ts-expect-error Number is not a nullish type.
export const negativeNumber: Nullish = -1;

// @ts-expect-error Number is not a nullish type.
export const infinity: Nullish = Infinity;

// @ts-expect-error Number is not a nullish type.
export const notANumber: Nullish = NaN;

// @ts-expect-error Number is not a nullish type.
export const float: Nullish = 0.5;

// @ts-expect-error Number is not a nullish type.
export const expression: Nullish = 1 + 1;

// @ts-expect-error BigInt is not a nullish type.
export const bigInt: Nullish = BigInt(0);

// @ts-expect-error String is not a nullish type.
export const stringEmpty: Nullish = "";

// @ts-expect-error String is not a nullish type.
export const stringNotEmpty: Nullish = "vangware";

// @ts-expect-error Boolean is not a nullish type.
export const yup: Nullish = true;

// @ts-expect-error Boolean is not a nullish type.
export const nope: Nullish = false;

// @ts-expect-error Boolean is not a nullish type.
export const comparison: Nullish = 1 * 1 === 1;

// @ts-expect-error Symbol is not a nullish type.
export const symbol: Nullish = Symbol("vangware");

// @ts-expect-error Object is not a nullish type.
export const object: Nullish = {};

// @ts-expect-error Object is not a nullish type.
export const array: Nullish = [];

// @ts-expect-error Function is not a nullish type.
export const idFunction: Nullish = <Input>(input: Input) => input;
