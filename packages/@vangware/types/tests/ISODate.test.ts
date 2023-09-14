import type { ISODate } from "../src/ISODate.js";

export const validDate: ISODate = "1989-10-13T10:15:13.123Z";

export const validDateNegativeYear: ISODate = "-1989-10-13T10:15:13.123Z";

// @ts-expect-error Invalid month value (must be between 01 and 12).
export const invalidMonthDate: ISODate = "1989-99-13T10:15:13.123Z";

// @ts-expect-error Invalid day value (must be between 01 and 31).
export const invalidDayDate: ISODate = "1989-10-99T10:15:13.123Z";

// @ts-expect-error Invalid string.
export const invalidStringDate: ISODate = "❌";

// @ts-expect-error Invalid empty string.
export const invalidEmptyDate: ISODate = "";

// @ts-expect-error Invalid negative month value.
export const invalidNegativeMonth: ISODate = "1989--10-13T10:15:13.123Z";

// @ts-expect-error Invalid float month value.
export const invalidFloatMonth: ISODate = "1989-10.5-13T10:15:13.123Z";

// @ts-expect-error Invalid negative day value.
export const invalidNegativeDay: ISODate = "1989-10--13T10:15:13.123Z";

// @ts-expect-error Invalid float day value.
export const invalidFloatDay: ISODate = "1989-10-13.5T10:15:13.123Z";

// @ts-expect-error Invalid negative hours value.
export const invalidNegativeHours: ISODate = "1989-10-13T-10:15:13.123Z";

// @ts-expect-error Invalid float hours value.
export const invalidFloatHours: ISODate = "1989-10-13T10.5:15:13.123Z";

// @ts-expect-error Invalid negative minutes value.
export const invalidNegativeMinutes: ISODate = "1989-10-13T10:-15:13.123Z";

// @ts-expect-error Invalid float minutes value.
export const invalidFloatMinutes: ISODate = "1989-10-13T10:15.5:13.123Z";

// @ts-expect-error Invalid negative seconds value.
export const invalidNegativeSeconds: ISODate = "1989-10-13T10:15:-13.123Z";

// @ts-expect-error Invalid float seconds value.
export const invalidFloatSeconds: ISODate = "1989-10-13T10:15:13.5.123Z";

// @ts-expect-error Invalid negative milliseconds value.
export const invalidNegativeMilliseconds: ISODate = "1989-10-13T10:15:13.-123Z";

// @ts-expect-error Invalid float milliseconds value.
export const invalidFloatMilliseconds: ISODate = "1989-10-13T10:15:13.123.5Z";
