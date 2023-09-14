import type { Entry } from "../src/Entry.js";

type StringNumberEntry = Entry<string, number>;

export const circleEntry: StringNumberEntry = ["🟢", 1];

// @ts-expect-error Number key (string expected)
export const wrongKeyEntry: StringNumberEntry = [0, 1];

// @ts-expect-error String value (string expected)
export const wrongValueEntry: StringNumberEntry = ["🟢", "💚"];
