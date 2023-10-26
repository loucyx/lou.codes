import type { ReadOnly } from "@lou.codes/types";

/**
 * Read-only `AsyncIterableIterator`.
 *
 * @category Generators
 * @remarks
 * This is just an read-only alternative to `AsyncIterableIterator` to avoid
 * unwanted mutations.
 *
 * @template Item Type of the items in the `AsyncIterableIterator`.
 */
export type ReadOnlyAsyncIterableIterator<Item = unknown> = ReadOnly<
	AsyncIterableIterator<Item>
>;
