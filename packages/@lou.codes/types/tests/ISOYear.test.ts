import type { ISOYear } from "../src/ISOYear.js";

export const year1989: ISOYear = "1989";

export const yearNegative1989: ISOYear = "-001989";

// @ts-expect-error Invalid ISO negative year
export const yearNegative1989Invalid: ISOYear = "-1989";

// @ts-expect-error ISO year has to have at least 2 characters
export const year0: ISOYear = "0";

// @ts-expect-error Decimals aren't valid year values
export const yearDecimal: ISOYear = 1;

// @ts-expect-error Floats aren't valid year values
export const yearFloat: ISOYear = 1.5;

// @ts-expect-error Negative values aren't valid year values
export const yearNegative: ISOYear = -1;

// @ts-expect-error BigInts aren't valid year values
export const yearBigInt: ISOYear = 1n;
