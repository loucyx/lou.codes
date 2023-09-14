import type { Strigifiable } from "../src/Strigifiable.js";

export const aString: Strigifiable = "Vangware";
export const aBoolean: Strigifiable = true;
// eslint-disable-next-line no-null/no-null
export const aNull: Strigifiable = null;
export const anUndefined: Strigifiable = undefined;
export const aNumber: Strigifiable = 1;
export const aBigInt: Strigifiable = 1n;

// @ts-expect-error Objects can have a `toString` but this type is more for stringable types.
export const anObject: Strigifiable = {};

// @ts-expect-error Objects can have a `toString` but this type is more for stringable types.
export const anObjectWithValidToString: Strigifiable = {
	toString: () => "Vangware",
};

// @ts-expect-error Return type for toString should be a `string`
export const anObjectWithInvalidToString: Strigifiable = { toString: () => 1 };
