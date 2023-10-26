import { isAsyncIterable, isIterable } from "@lou.codes/predicates";
import type { IsomorphicIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Takes a value, iterable or asynchronous iterable and yields it.
 *
 * @category Generators
 * @example
 * ```typescript
 * const iterable = toIterable(1);
 * const iterator = getIterator(iterable);
 * iterator.next(); // { value: 1, done: false }
 * iterator.next(); // { value: undefined, done: true }
 * ```
 * @see {@link createIterableIterator}
 * @see {@link ReadOnlyAsyncIterable}
 * @see {@link ReadOnlyAsyncIterableIterator}
 * @see {@link ReadOnlyIterableIterator}
 *
 * @template ValueOrIterable Generic of value or iterable to yield.
 * @param valueOrIterable Vale or iterable to yield.
 * @returns Yielded item or iterable.
 */
export const toIterable = <const ValueOrIterable>(
	valueOrIterable: ValueOrIterable,
) =>
	createIterableIterator(
		isAsyncIterable(valueOrIterable)
			? async function* () {
					yield* valueOrIterable;
			  }
			: function* () {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					isIterable(valueOrIterable)
						? yield* valueOrIterable
						: yield valueOrIterable;
			  },
	) as ValueOrIterable extends IsomorphicIterable<infer Item>
		? Item extends ReadOnlyAsyncIterable<Item>
			? ReadOnlyAsyncIterableIterator<Item>
			: ReadOnlyIterableIterator<Item>
		: ReadOnlyIterableIterator<ValueOrIterable>;
