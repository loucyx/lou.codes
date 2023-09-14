import type { ArrayLike } from "./ArrayLike.js";
import type { HeadAndTail } from "./HeadAndTail.js";
import type { Second } from "./Second.js";

/**
 * Last values of an {@link ArrayLike} (omitting the first).
 *
 * @category Array
 * @category String
 * @remarks
 * Type of the last items of an `ArrayLike`, excluding the first item in said
 * {@link ArrayLike}.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const tail: Tail<typeof array> = ["🟩", "💚"];
 * ```
 * @see {@link ArrayLike}
 * @see {@link HeadAndTail}
 * @see {@link Second}
 *
 * @template Input Type of the array to get the tail.
 */
export type Tail<Input extends ArrayLike> = Second<HeadAndTail<Input>>;
