import type { Hours } from "../src/Hours.js";

export const hours0: Hours = 0;

export const hours23: Hours = 23;

// @ts-expect-error Floats aren't valid hours values
export const hoursFloat: Hours = 1.5;

// @ts-expect-error Negative values aren't valid hours values
export const hoursNegative: Hours = -1;

// @ts-expect-error BigInts aren't valid hours values
export const hoursBigInt: Hours = 1n;

// @ts-expect-error Strings aren't valid hours values
export const hoursString: Hours = "1";

// @ts-expect-error Hours go from `0` to `23`
export const hours24: Hours = 24;
