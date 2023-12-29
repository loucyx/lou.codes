import { isIterable } from "@lou.codes/predicates";
import type {
	IsomorphicIterable,
	IsomorphicIterableItem,
} from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import type { ReadOnlyIterator } from "./types/ReadOnlyIterator.js";

/**
 * Takes a value, iterable and yields it.
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
 *
 * @template ValueOrIterable Generic of value or iterable to yield.
 * @param valueOrIterable Vale or iterable to yield.
 * @returns Yielded item or iterable.
 */
export const toIterable = <const ValueOrIterable>(
	valueOrIterable: ValueOrIterable,
) =>
	createIterableIterator(function* () {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		isIterable(valueOrIterable) ?
			yield* valueOrIterable
		:	yield valueOrIterable;
	} as () => ReadOnlyIterator<
		ValueOrIterable extends IsomorphicIterable ?
			IsomorphicIterableItem<ValueOrIterable>
		:	ValueOrIterable
	>);
