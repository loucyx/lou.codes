import type { ArrayLike } from "./ArrayLike.js";
import type { InitialAndLast } from "./InitialAndLast.js";

/**
 * Second value of an {@link ArrayLike}.
 *
 * @category Array
 * @category String
 * @remarks
 * Type of the Second item of an `ArrayLike`, manly here to avoid magic numbers.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const second: Second<typeof array> = "🟩";
 * ```
 * @see {@link ArrayLike}
 * @see {@link InitialAndLast}
 *
 * @template Input The input `ArrayLike`.
 */
export type Second<Input extends ArrayLike> = Input[1];
