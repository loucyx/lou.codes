import type { Strigifiable } from "../src/Strigifiable.js";

export const string: Strigifiable = "🟢";
export const number: Strigifiable = 1;
export const bigint: Strigifiable = 1n;
export const boolean: Strigifiable = true;
// eslint-disable-next-line no-null/no-null
export const nullValue: Strigifiable = null;
export const undefinedValue: Strigifiable = undefined;

// @ts-expect-error Symbols shouldn't be consumed as strings.
export const symbol: Strigifiable = Symbol("🟢");

// @ts-expect-error Putting objects in strings directly is generally a mistake.
export const object: Strigifiable = { foo: "bar" };

// @ts-expect-error Putting arrays in strings directly is generally a mistake.
export const array: Strigifiable = [1, 2, 3];
