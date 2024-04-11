/**
 * Read-only `Iterator`.
 *
 * @category Iterables
 * @remarks
 * This is just an read-only alternative to `Iterator` to avoid unwanted
 * mutations.
 *
 * @template Item Type of the items in the `Iterator`.
 * @template Return Type of the return value in the `Iterator`.
 * @template Next Type of the next value in the `Iterator`.
 */
export type ReadOnlyIterator<
	Item = unknown,
	Return = void,
	Next = void,
> = Readonly<Iterator<Item, Return, Next>>;
