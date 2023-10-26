import type { IsomorphicIterable } from "./IsomorphicIterable.js";

/**
 * Type of the items of an `IsomorphicIterable`.
 *
 * @category Iterables
 * @remarks
 * Sometimes we have to get the item type out of an `IsomorphicIterable`.
 * This type is meant to be used where inference is not an option.
 * @example
 * ```typescript
 * const iterable: IsomorphicIterable<number> = [1, 2, 3];
 * const item: IsomorphicIterableItem<typeof iterable> = 1;
 * ```
 * @see {@link IsomorphicIterable}
 *
 * @template SourceIterable `IsomorphicIterable` type to get the item type from.`
 */
export type IsomorphicIterableItem<SourceIterable extends IsomorphicIterable> =
	SourceIterable extends IsomorphicIterable<infer Item> ? Item : never;
