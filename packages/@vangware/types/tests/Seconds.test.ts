import type { Seconds } from "../src/Seconds.js";

export const seconds0: Seconds = 0;

export const seconds59: Seconds = 59;

// @ts-expect-error Floats aren't valid seconds values
export const secondsFloat: Seconds = 1.5;

// @ts-expect-error Negative values aren't valid seconds values
export const secondsNegative: Seconds = -1;

// @ts-expect-error BigInts aren't valid seconds values
export const secondsBigInt: Seconds = 1n;

// @ts-expect-error Strings aren't valid seconds values
export const secondsString: Seconds = "1";

// @ts-expect-error Seconds go from `0` to `59`
export const seconds60: Seconds = 60;
