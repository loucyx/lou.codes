import type { First } from "../src/First.js";

export const tuple = [1, "🟢"] as const;

type FirstOfTuple = First<typeof tuple>;

export const firstOfTuple: FirstOfTuple = 1;

// @ts-expect-error First gets the first item of the tuple.
export const secondOfTuple: FirstOfTuple = "🟢";
