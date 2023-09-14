import type { Enumerate } from "../src/Enumerate.js";

type From0To10 = Enumerate<10>;

export const zero: From0To10 = 0;

export const ten: From0To10 = 0;

// @ts-expect-error 11 is the length of this enumerate, not the max value
export const eleven: From0To10 = 11;

// @ts-expect-error Enumerate goes from 0 to Length - 1
export const negative: From0To10 = -1;
