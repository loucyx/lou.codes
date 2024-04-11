/**
 * Read-only `IterableIterator`.
 *
 * @category Iterables
 * @remarks
 * This is just an read-only alternative to `IterableIterator` to avoid unwanted
 * mutations.
 *
 * @template Item Type of the items in the `IterableIterator`.
 */
export type ReadOnlyIterableIterator<Item = unknown> = Readonly<
	IterableIterator<Item>
>;
