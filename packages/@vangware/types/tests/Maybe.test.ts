import type { Maybe } from "../src/Maybe.js";
import type { ReadOnlyArray } from "../src/ReadOnlyArray.js";

export type MaybeString = Maybe<string>;

export const maybeStringValue: MaybeString = "🟩";
export const maybeStringUndefined: MaybeString = undefined;

// @ts-expect-error Type has to match (and this isn't a `string`).
export const wrongMaybeString1: MaybeString = 13;

// @ts-expect-error Type has to be either `string` or `undefined`, not `null`.
// eslint-disable-next-line no-null/no-null
export const wrongMaybeString2: MaybeString = null;

export const testValueFunction = (maybeString: MaybeString) =>
	maybeString?.charAt(0) ?? "";

export const testArrayFunction = (
	maybeStringArray: ReadOnlyArray<MaybeString>,
) => maybeStringArray.map(item => item?.charAt(0) ?? "");
