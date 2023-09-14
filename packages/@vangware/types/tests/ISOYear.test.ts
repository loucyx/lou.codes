import type { ISOYear } from "../src/ISOYear.js";

export const year1989: ISOYear = "1989";

export const yearNegative1989: ISOYear = "-1989";

// Sadly we can't enforce string length for the type (so it has a length of 4)
export const year0: ISOYear = "0";

// @ts-expect-error Decimals aren't valid year values
export const yearDecimal: ISOYear = 1;

// @ts-expect-error Floats aren't valid year values
export const yearFloat: ISOYear = 1.5;

// @ts-expect-error Negative values aren't valid year values
export const yearNegative: ISOYear = -1;

// @ts-expect-error BigInts aren't valid year values
export const yearBigInt: ISOYear = 1n;
