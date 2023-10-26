import type { DayOfMonth } from "../src/DayOfMonth.js";

export const dayOfMonth1: DayOfMonth = 1;

export const dayOfMonth31: DayOfMonth = 31;

// @ts-expect-error Floats aren't valid day of month values
export const dayOfMonthFloat: DayOfMonth = 1.5;

// @ts-expect-error Negative values aren't valid day of month values
export const dayOfMonthNegative: DayOfMonth = -1;

// @ts-expect-error BigInts aren't valid day of month values
export const dayOfMonthBigInt: DayOfMonth = 1n;

// @ts-expect-error Strings aren't valid day of month values
export const dayOfMonthString: DayOfMonth = "1";

// @ts-expect-error Day of month goes from `1` to `31`
export const dayOfMonth0: DayOfMonth = 0;

// @ts-expect-error Day of month goes from `1` to `31`
export const dayOfMonth32: DayOfMonth = 32;
