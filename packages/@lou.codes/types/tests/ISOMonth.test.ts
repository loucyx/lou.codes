import type { ISOMonth } from "../src/ISOMonth.js";

export const validMonth01: ISOMonth = "01";
export const validMonth06: ISOMonth = "06";
export const validMonth12: ISOMonth = "12";

// @ts-expect-error Invalid month value (must be between 01 and 12).
export const invalidMonthEmpty: ISOMonth = "";

// @ts-expect-error Invalid month value (must be between 01 and 12).
export const invalidMonthValue: ISOMonth = "99";

// @ts-expect-error Invalid month value (must be string).
export const invalidMonthNumber: ISOMonth = 1;
