import type { ISODayOfMonth } from "../src/ISODayOfMonth.js";

export const validDay01: ISODayOfMonth = "01";
export const validDay15: ISODayOfMonth = "15";
export const validDay31: ISODayOfMonth = "31";

// @ts-expect-error Invalid month value (must be between 01 and 31).
export const invalidDayEmpty: ISODayOfMonth = "";

// @ts-expect-error Invalid day value (must be between 01 and 31).
export const invalidDayValue: ISODayOfMonth = "99";

// @ts-expect-error Invalid day value (must be string).
export const invalidDayNumber: ISODayOfMonth = 1;
