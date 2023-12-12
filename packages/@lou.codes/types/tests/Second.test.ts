import type { Second } from "../src/Second.js";

type SecondOfTuple = Second<typeof tuple>;

export const tuple = [1, "🟢"] as const;

export const secondOfTuple: SecondOfTuple = "🟢";

// @ts-expect-error Second gets the first second item of the tuple.
export const firstOfTuple: SecondOfTuple = 1;
