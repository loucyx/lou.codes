import type { ArrayLike } from "./ArrayLike.js";
import type { InitialAndLast } from "./InitialAndLast.js";

/**
 * First value of an {@link ArrayLike}.
 *
 * @category Array
 * @category String
 * @remarks
 * Type of the first item of an `ArrayLike`, mainly here to avoid magic numbers.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const first: First<typeof array> = "🟢";
 * ```
 * @see {@link ArrayLike}
 * @see {@link InitialAndLast}
 *
 * @template Input The input `ArrayLike`.
 */
export type First<Input extends ArrayLike> = Input[0];
