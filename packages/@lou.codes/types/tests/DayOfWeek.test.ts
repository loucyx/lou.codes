import type { DayOfWeek } from "../src/DayOfWeek.js";

export const dayOfWeek0: DayOfWeek = 0;

export const dayOfWeek6: DayOfWeek = 6;

// @ts-expect-error Floats aren't valid day of week values
export const dayOfWeekFloat: DayOfWeek = 1.5;

// @ts-expect-error Negative values aren't valid day of week values
export const dayOfWeekNegative: DayOfWeek = -1;

// @ts-expect-error BigInts aren't valid day of week values
export const dayOfWeekBigInt: DayOfWeek = 1n;

// @ts-expect-error Strings aren't valid day of week values
export const dayOfWeekString: DayOfWeek = "1";

// @ts-expect-error Day of week goes from `0` to `6`
export const dayOfWeek7: DayOfWeek = 7;
