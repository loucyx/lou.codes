import type { Month } from "../src/Month.js";

export const month0: Month = 0;

export const month11: Month = 11;

// @ts-expect-error Floats aren't valid month values
export const monthFloat: Month = 1.5;

// @ts-expect-error Negative values aren't valid month values
export const monthNegative: Month = -1;

// @ts-expect-error BigInts aren't valid month values
export const monthBigInt: Month = 1n;

// @ts-expect-error Strings aren't valid month values
export const monthString: Month = "1";

// @ts-expect-error Month goes from `0` to `11`
export const month12: Month = 12;
