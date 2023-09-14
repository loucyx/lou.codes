import type { ArrayLike } from "./ArrayLike.js";
import type { First } from "./First.js";
import type { HeadAndTail } from "./HeadAndTail.js";

/**
 * Initial value of an `ArrayLike`.
 *
 * @category Array
 * @category String
 * @remarks
 * Given a type argument (an `ArrayLike`), this returns the type of the item in
 * index `0`.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const head: Head<typeof array> = "🟢";
 * ```
 * @see {@link ArrayLike}
 * @see {@link First}
 * @see {@link HeadAndTail}
 *
 * @template Input `ArrayLike` value (such as `Array` or `string`).
 */
export type Head<Input extends ArrayLike> = First<HeadAndTail<Input>>;
