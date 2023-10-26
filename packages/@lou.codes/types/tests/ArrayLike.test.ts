import type { ArrayLike } from "../src/ArrayLike.js";

export const ok1: ArrayLike<number> = [1, 2, 3];
export const ok2: ArrayLike<string> = ["1", "2", "3"];
export const ok3: ArrayLike = [1, 2, 3];
export const ok4: ArrayLike = { [0]: 1, [1]: 2, [2]: 3, length: 3 };

// @ts-expect-error Type 'string' is not assignable to type 'number'.
export const wrongType1: ArrayLike<number> = ["1", "2", "3"];

// @ts-expect-error Type 'string' is not assignable to type 'number'.
export const wrongType2: ArrayLike<number> = { [0]: "1", length: 3 };

// @ts-expect-error Type 'string' is not assignable to type 'number'.
export const wrongType3: ArrayLike<number> = { [0]: 1, [1]: "2", length: 3 };

// @ts-expect-error It has to have a length
export const missingLength: ArrayLike<number> = { [0]: 1, [1]: 2 };
