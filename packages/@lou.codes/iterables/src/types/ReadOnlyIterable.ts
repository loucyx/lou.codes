import type { ReadOnly } from "@lou.codes/types";

/**
 * Read-only `Iterable`.
 *
 * @category Generators
 * @remarks
 * This is just an read-only alternative to `Iterable` to avoid unwanted
 * mutations.
 *
 * @template Item Type of the items in the `Iterable`.
 */
export type ReadOnlyIterable<Item = unknown> = ReadOnly<Iterable<Item>>;
