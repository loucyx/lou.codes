import type { ISOMinutes } from "../src/ISOMinutes.js";

export const minutes00: ISOMinutes = "00";

export const minutes59: ISOMinutes = "59";

// @ts-expect-error Decimals aren't valid minutes values
export const minutesDecimal: ISOMinutes = 1;

// @ts-expect-error Floats aren't valid minutes values
export const minutesFloat: ISOMinutes = 1.5;

// @ts-expect-error Negative values aren't valid minutes values
export const minutesNegative: ISOMinutes = -1;

// @ts-expect-error BigInts aren't valid minutes values
export const minutesBigInt: ISOMinutes = 1n;

// @ts-expect-error Single digit strings aren't valid minutes values
export const minutesString: ISOMinutes = "1";

// @ts-expect-error ISOMinutes go from `"00"` to `"59"`
export const minutes60: ISOMinutes = "60";
