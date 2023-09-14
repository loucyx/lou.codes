import type { ArrayLike } from "./ArrayLike.js";
import type { InitialAndLast } from "./InitialAndLast.js";
import type { Second } from "./Second.js";

/**
 * Last value of an `ArrayLike`.
 *
 * @category Array
 * @category String
 * @remarks
 * Type of the last character of a string or the last element of an array.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const last: Last<typeof array> = "💚";
 * ```
 * @see {@link ArrayLike}
 * @see {@link InitialAndLast}
 * @see {@link Second}
 *
 * @template Input The input `ArrayLike`.
 */
export type Last<Input extends ArrayLike> = Second<InitialAndLast<Input>>;
