import type { Digit } from "../src/Digit.js";

export const test0: Digit = 0;
export const test1: Digit = 1;
export const test2: Digit = 2;
export const test3: Digit = 3;
export const test4: Digit = 4;
export const test5: Digit = 5;
export const test6: Digit = 6;
export const test7: Digit = 7;
export const test8: Digit = 8;
export const test9: Digit = 9;

// @ts-expect-error `Digit` goes from 0 to 9
export const test10: Digit = 10;

// @ts-expect-error NaN is invalid.
export const testNaN: Digit = NaN;

// @ts-expect-error Infinity is invalid.
export const testInfinity: Digit = Infinity;

// @ts-expect-error -Infinity is invalid.
export const testNegativeInfinity: Digit = -Infinity;

// @ts-expect-error `number` is invalid (needs to be casted to Digit)
export const testNumber: Digit = 0 as number;
