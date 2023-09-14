import type { Single } from "../src/Single.js";

type StringSingle = Single<string>;

export const fooSingle: StringSingle = ["foo"];

// @ts-expect-error Single can only have one value
export const fooTuple: StringSingle = ["foo", "foo"];

// @ts-expect-error Single should have one value
export const emptySingle: StringSingle = [];

// @ts-expect-error This particular single is for strings, not numbers
export const numberSingle: StringSingle = [1];
