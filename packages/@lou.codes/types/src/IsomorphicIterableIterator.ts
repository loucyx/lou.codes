/**
 * Value might be an `AsyncIterableIterator` or just an `IterableIterator`
 * (read-only).
 *
 * @category Iterables
 * @remarks
 * This is just an read-only alternative to `AsyncIterableIterator` or
 * `IterableIterator` to avoid unwanted mutations.
 * @example
 * ```typescript
 * const iterable: IsomorphicIterableIterator<number> = [1, 2, 3];
 * ```
 *
 * @template Item Type of the items in the `AsyncIterableIterator` or
 * `IterableIterator`.
 */
export type IsomorphicIterableIterator<Item = unknown> = Readonly<
	AsyncIterableIterator<Item> | IterableIterator<Item>
>;
