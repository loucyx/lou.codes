import { isIsomorphicIterable } from "@lou.codes/predicates";
import type {
	IsomorphicIterable,
	IsomorphicIterableItem,
} from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Takes a value, iterable or asynchronous iterable and yields it.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const iterable = toIterable(1);
 * const iterator = getIterator(iterable);
 * iterator.next(); // { value: 1, done: false }
 * iterator.next(); // { value: undefined, done: true }
 * ```
 * @see {@link createIterableIterator}
 *
 * @template ValueOrIterable Generic of value or iterable to yield.
 * @param valueOrIterable Vale or iterable to yield.
 * @returns Yielded item or iterable.
 */
export const toIterable = <const ValueOrAsyncIterable>(
	valueOrIterable: ValueOrAsyncIterable,
) =>
	createIterableIterator(async function* () {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		isIsomorphicIterable(valueOrIterable) ?
			yield* valueOrIterable
		:	yield valueOrIterable;
	} as () => Readonly<
		AsyncIterator<
			ValueOrAsyncIterable extends IsomorphicIterable ?
				IsomorphicIterableItem<ValueOrAsyncIterable>
			:	ValueOrAsyncIterable
		>
	>);
