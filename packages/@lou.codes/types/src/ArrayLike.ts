import type { Enumerate } from "./Enumerate.js";
import type { NeverFallback } from "./NeverFallback.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * An alternative for TypeScript's `ArrayLike` type, with its type set to
 * `unknown` by default. It also makes it shallowly read-only.
 *
 * @category Array
 * @remarks
 * When working with optional types, having to type `ArrayLike<unknown>` every
 * time gets annoying pretty fast. This type is a drop-in replacement for
 * `ArrayLike`, with the only difference being that the type of the items is
 * set to `unknown` by default.
 * @example
 * ```typescript
 * const arrayLike: ArrayLike<number> = [1, 2, 3];
 * ```
 *
 * @template Item Type of the items in the array-like object.
 */

export type ArrayLike<
	Item = unknown,
	Length extends number = number,
> = ReadOnlyRecord<
	NeverFallback<Exclude<Enumerate<Length>, Length>, number>,
	Item
> & {
	/**	Amount of items in the {@link ArrayLike}. */
	readonly length: Length;
};
