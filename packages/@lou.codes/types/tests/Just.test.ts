import type { Just } from "../src/Just.js";
import type { Maybe } from "../src/Maybe.js";

type MaybeNumber = Maybe<number>;
type DefinedNumber = Just<MaybeNumber>;

export const maybeNumber: MaybeNumber = 1;
export const maybeUndefined: MaybeNumber = undefined;
export const definedNumber: DefinedNumber = 1;

// @ts-expect-error Defined removed `undefined` of the union.
export const definedUndefined: DefinedNumber = undefined;
