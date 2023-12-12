import type { First } from "../src/First.js";

type FirstOfTuple = First<typeof tuple>;

export const tuple = [1, "🟢"] as const;

export const firstOfTuple: FirstOfTuple = 1;

// @ts-expect-error First gets the first item of the tuple.
export const secondOfTuple: FirstOfTuple = "🟢";
