import type { ISOHours } from "../src/ISOHours.js";

export const hours00: ISOHours = "00";

export const hours23: ISOHours = "23";

// @ts-expect-error Decimals aren't valid hours values
export const hoursDecimal: ISOHours = 1;

// @ts-expect-error Floats aren't valid hours values
export const hoursFloat: ISOHours = 1.5;

// @ts-expect-error Negative values aren't valid hours values
export const hoursNegative: ISOHours = -1;

// @ts-expect-error BigInts aren't valid hours values
export const hoursBigInt: ISOHours = 1n;

// @ts-expect-error Single digit strings aren't valid hours values
export const hoursString: ISOHours = "1";

// @ts-expect-error ISOHours go from `"00"` to `"23"`
export const hours24: ISOHours = "24";
