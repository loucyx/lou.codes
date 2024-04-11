/**
 * Read-only `Iterable`.
 *
 * @category Iterables
 * @remarks
 * This is just an read-only alternative to `Iterable` to avoid unwanted
 * mutations.
 * @example
 * ```typescript
 * const test1: ReadOnlyIterable<number> = [1, 2, 3]; // ok
 * const test2: ReadOnlyIterable<string> = [1, 2, 3]; // error
 * ```
 * @template Item Type of the items in the `Iterable`.
 */
export type ReadOnlyIterable<Item = unknown> = Readonly<Iterable<Item>>;
