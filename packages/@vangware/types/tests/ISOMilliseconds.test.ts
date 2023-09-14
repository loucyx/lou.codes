import type { ISOMilliseconds } from "../src/ISOMilliseconds.js";

export const milliseconds000: ISOMilliseconds = "000";

export const milliseconds999: ISOMilliseconds = "999";

// @ts-expect-error Decimals aren't valid milliseconds values
export const millisecondsDecimal: ISOMilliseconds = 1;

// @ts-expect-error Floats aren't valid milliseconds values
export const millisecondsFloat: ISOMilliseconds = 1.5;

// @ts-expect-error Negative values aren't valid milliseconds values
export const millisecondsNegative: ISOMilliseconds = -1;

// @ts-expect-error BigInts aren't valid milliseconds values
export const millisecondsBigInt: ISOMilliseconds = 1n;

// @ts-expect-error Single digit strings aren't valid milliseconds values
export const millisecondsString: ISOMilliseconds = "1";

// @ts-expect-error ISOMilliseconds go from `"000"` to `"999"`
export const milliseconds1000: ISOMilliseconds = "1000";
