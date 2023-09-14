import type { Range } from "../src/Range.js";

type From5To10 = Range<5, 10>;

export const five: From5To10 = 5;

export const ten: From5To10 = 10;

// @ts-expect-error 11 is the length of this enumerate, not the max value
export const eleven: From5To10 = 11;

// @ts-expect-error Range goes from 5 to Length - 1
export const outsideRange: From5To10 = 4;

// @ts-expect-error Range goes from 5 to Length - 1
export const negative: From5To10 = -1;
