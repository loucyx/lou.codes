import type { MultiDigitNumberString } from "../src/MultiDigitNumberString.js";

export const multiDigit: MultiDigitNumberString = "01";

// @ts-expect-error Float shouldn't work
export const floatDigit: MultiDigitNumberString = "0.51";

// @ts-expect-error Single digit shouldn't work
export const singleDigit: MultiDigitNumberString = "1";
