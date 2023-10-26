import type { Radix } from "../src/Radix.js";

export const test2: Radix = 2;
export const test3: Radix = 3;
export const test4: Radix = 4;
export const test5: Radix = 5;
export const test6: Radix = 6;
export const test7: Radix = 7;
export const test8: Radix = 8;
export const test9: Radix = 9;
export const test10: Radix = 10;
export const test11: Radix = 11;
export const test12: Radix = 12;
export const test13: Radix = 13;
export const test14: Radix = 14;
export const test15: Radix = 15;
export const test16: Radix = 16;
export const test17: Radix = 17;
export const test18: Radix = 18;
export const test19: Radix = 19;
export const test20: Radix = 20;
export const test21: Radix = 21;
export const test22: Radix = 22;
export const test23: Radix = 23;
export const test24: Radix = 24;
export const test25: Radix = 25;
export const test26: Radix = 26;
export const test27: Radix = 27;
export const test28: Radix = 28;
export const test29: Radix = 29;
export const test30: Radix = 30;
export const test31: Radix = 31;
export const test32: Radix = 32;
export const test33: Radix = 33;
export const test34: Radix = 34;
export const test35: Radix = 35;
export const test36: Radix = 36;

// @ts-expect-error `0` is an invalid Radix
export const test0: Radix = 0;

// @ts-expect-error `1` is an invalid Radix
export const test1: Radix = 1;

// @ts-expect-error NaN is invalid.
export const testNaN: Radix = NaN;

// @ts-expect-error Infinity is invalid.
export const testInfinity: Radix = Infinity;

// @ts-expect-error -Infinity is invalid.
export const testNegativeInfinity: Radix = -Infinity;

// @ts-expect-error `number` is invalid (needs to be casted to Radix)
export const testNumber: Radix = 0 as number;
