import type { ReadOnly } from "@vangware/types";

/**
 * Read-only `AsyncIterable`.
 *
 * @category Generators
 * @remarks
 * This is just an read-only alternative to `AsyncIterable` to avoid unwanted
 * mutations.
 *
 * @template Item Type of the items in the `AsyncIterable`.
 */
export type ReadOnlyAsyncIterable<Item = unknown> = ReadOnly<
	AsyncIterable<Item>
>;
