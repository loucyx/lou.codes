import type { Milliseconds } from "../src/Milliseconds.js";

export const milliseconds0: Milliseconds = 0;

export const milliseconds999: Milliseconds = 999;

// @ts-expect-error Floats aren't valid milliseconds values
export const millisecondsFloat: Milliseconds = 1.5;

// @ts-expect-error Negative values aren't valid milliseconds values
export const millisecondsNegative: Milliseconds = -1;

// @ts-expect-error BigInts aren't valid milliseconds values
export const millisecondsBigInt: Milliseconds = 1n;

// @ts-expect-error Strings aren't valid milliseconds values
export const millisecondsString: Milliseconds = "1";

// @ts-expect-error Milliseconds go from `0` to `999`
export const milliseconds1000: Milliseconds = 1000;
