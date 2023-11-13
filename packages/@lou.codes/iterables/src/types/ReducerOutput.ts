import type { IsomorphicIterable } from "@lou.codes/types";
import type { ReadOnlyAsyncIterable } from "./ReadOnlyAsyncIterable.js";

/**
 * `IsomorphicIterable` reducer function optional return value.
 *
 * @category Reducers
 * @remarks
 * When reducing an `IsomorphicIterable` with a reducer function, the
 * output can be either a `Promise` or a regular value depending on the input.
 * @see {@link ReadOnlyAsyncIterable}
 *
 * @template Item Type of the items in the `IsomorphicIterable`.
 * @template Output Type of the output.
 */
export type ReducerOutput<
	Iterable extends IsomorphicIterable,
	Output,
> = Iterable extends IsomorphicIterable<infer Item> ?
	Iterable extends ReadOnlyAsyncIterable<Item> ?
		Promise<Output>
	:	Output
:	never;
