import type { Defined } from "../src/Defined.js";
import type { Maybe } from "../src/Maybe.js";

type MaybeNumber = Maybe<number>;
type DefinedNumber = Defined<MaybeNumber>;

export const maybeNumber: MaybeNumber = 1;
export const maybeUndefined: MaybeNumber = undefined;
export const definedNumber: DefinedNumber = 1;

// @ts-expect-error Defined removed `undefined` of the union.
export const definedUndefined: DefinedNumber = undefined;
