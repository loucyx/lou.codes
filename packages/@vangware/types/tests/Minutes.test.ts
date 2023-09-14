import type { Minutes } from "../src/Minutes.js";

export const minutes0: Minutes = 0;

export const minutes59: Minutes = 59;

// @ts-expect-error Floats aren't valid minutes values
export const minutesFloat: Minutes = 1.5;

// @ts-expect-error Negative values aren't valid minutes values
export const minutesNegative: Minutes = -1;

// @ts-expect-error BigInts aren't valid minutes values
export const minutesBigInt: Minutes = 1n;

// @ts-expect-error Strings aren't valid minutes values
export const minutesString: Minutes = "1";

// @ts-expect-error Minutes go from `0` to `59`
export const minutes60: Minutes = 60;
