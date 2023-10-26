import type { ReadOnly } from "@lou.codes/types";

/**
 * Read-only `AsyncIterator`.
 *
 * @category Generators
 * @remarks
 * This is just an read-only alternative to `AsyncIterator` to avoid unwanted
 * mutations.
 *
 * @template Item Type of the items in the `AsyncIterator`.
 * @template Return Type of the return value in the `AsyncIterator`.
 * @template Next Type of the next value in the `AsyncIterator`.
 */
export type ReadOnlyAsyncIterator<
	Item = unknown,
	Return = void,
	Next = void,
> = ReadOnly<AsyncIterator<Item, Return, Next>>;
