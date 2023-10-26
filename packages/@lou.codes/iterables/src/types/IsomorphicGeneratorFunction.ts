import type { Function, ReadOnlyArray } from "@lou.codes/types";
import type { createIterableIterator } from "../createIterableIterator.js";
import type { ReadOnlyAsyncIterator } from "./ReadOnlyAsyncIterator.js";
import type { ReadOnlyIterator } from "./ReadOnlyIterator.js";

/**
 * Function that returns an iterator or an asynchronous iterator.
 *
 * @category Generators
 * @remarks
 * This is mainly used for in the {@link createIterableIterator} function, to infer
 * the type of the generator function and the output.
 * @see {@link createIterableIterator}
 * @see {@link ReadOnlyAsyncIterator}
 * @see {@link ReadOnlyIterator}
 *
 * @template Item Type of the items in the iterator or asynchronous iterator.
 */
export type IsomorphicGeneratorFunction<Item = unknown> = Function<
	ReadOnlyArray<never>,
	ReadOnlyAsyncIterator<Item> | ReadOnlyIterator<Item>
>;
