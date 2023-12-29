import type { ReadOnly } from "./ReadOnly.js";

/**
 * Value might be an `AsyncIterator` or just an `Iterator` (read-only).
 *
 * @category Iterables
 * @remarks
 * This is just an read-only alternative to `AsyncIterator` or `Iterator` to
 * avoid unwanted mutations.
 * @example
 * ```typescript
 * const iterator: IsomorphicIterator<number> = [1, 2, 3];
 * ```
 *
 * @template Item Type of the items in the `AsyncIterator` or `Iterator`.
 * @template Return Type of the return value in the `AsyncIterator` or `Iterator`.
 * @template Next Type of the next value in the `AsyncIterator` or `Iterator`.
 */
export type IsomorphicIterator<
	Item = unknown,
	Return = void,
	Next = void,
> = ReadOnly<AsyncIterator<Item, Return, Next> | Iterator<Item, Return, Next>>;
