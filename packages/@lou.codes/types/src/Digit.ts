import type { Enumerate } from "./Enumerate.js";

/**
 * Valid digits (`0` to `9`).
 *
 * @category Number
 * @remarks
 * The idea with this type is to use it to construct others based on it, like
 * for example `Digit2` for `00` to `99`.
 * @example
 * ```typescript
 * const numbers: Iterable<Digit> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 * ```
 * @see {@link Enumerate}
 */
export type Digit = Enumerate<9>;
