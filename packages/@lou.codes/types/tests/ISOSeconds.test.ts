import type { ISOSeconds } from "../src/ISOSeconds.js";

export const seconds00: ISOSeconds = "00";

export const seconds59: ISOSeconds = "59";

// @ts-expect-error Decimals aren't valid seconds values
export const secondsDecimal: ISOSeconds = 1;

// @ts-expect-error Floats aren't valid seconds values
export const secondsFloat: ISOSeconds = 1.5;

// @ts-expect-error Negative values aren't valid seconds values
export const secondsNegative: ISOSeconds = -1;

// @ts-expect-error BigInts aren't valid seconds values
export const secondsBigInt: ISOSeconds = 1n;

// @ts-expect-error Single digit strings aren't valid seconds values
export const secondsString: ISOSeconds = "1";

// @ts-expect-error ISOSeconds go from `"00"` to `"59"`
export const seconds60: ISOSeconds = "60";
