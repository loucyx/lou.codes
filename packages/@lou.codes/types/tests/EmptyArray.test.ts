import type { EmptyArray } from "../src/EmptyArray.js";

export const emptyArray: EmptyArray = [] as const;

// @ts-expect-error Trying to access an item should give a compile-time error.
export const index0 = emptyArray[0];

// @ts-expect-error Array should be empty
export const numberArray: EmptyArray = [0, 1, 2] as const;

// @ts-expect-error Array should be empty
export const undefinedArray: EmptyArray = [undefined] as const;
