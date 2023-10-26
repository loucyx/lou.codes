import type { ArrayLike } from "./ArrayLike.js";
import type { First } from "./First.js";
import type { InitialAndLast } from "./InitialAndLast.js";

/**
 * Initial values of an `ArrayLike` (omitting the last).
 *
 * @category Array
 * @category String
 * @remarks
 * Given a type argument (an `ArrayLike`), this returns the type of the items
 * from the start of the `ArrayLike` until the before to last item.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const initial: Initial<typeof array> = ["🟢", "🟩"];
 * ```
 * @see {@link ArrayLike}
 * @see {@link First}
 * @see {@link InitialAndLast}
 *
 * @template Input `ArrayLike` value (such as `Array` or `string`).
 */
export type Initial<Input extends ArrayLike> = First<InitialAndLast<Input>>;
