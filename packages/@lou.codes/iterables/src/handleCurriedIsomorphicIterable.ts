import { isAsyncIterable } from "@lou.codes/predicates";
import type {
	Function,
	IsomorphicIterable,
	ReadOnlyArray,
	Unary,
} from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Takes a generator for iterables, then a generator for async iterables and
 * last 2 iterables, using the proper generator automatically.
 *
 * @category Common
 * @example
 * ```typescript
 * const handle = handleCurriedIsomorphicIterable(
 * 	iterable2 => iterable1 => function* () {
 * 		yield* iterable2;
 * 		yield* iterable1;
 * 	}
 * )(
 * 	iterable2 => iterable1 => async function* () {
 * 		yield* iterable2;
 * 		yield* iterable1;
 * 	}
 * );
 *
 * handle(nonAsyncIterable)(nonAsyncIterable); // IterableIterator
 * handle(asyncIterable)(nonAsyncIterable); // AsyncIterableIterator
 * ```
 * @param iterator Function to be used with non async iterables.
 * @returns Curried function with iterator in context.
 */
export const handleCurriedIsomorphicIterable =
	<Iterable2Item = unknown, Iterable1Item = unknown, Output = unknown>(
		iterator: Unary<
			Iterable<Iterable2Item>,
			Unary<
				Iterable<Iterable1Item>,
				Function<ReadOnlyArray<never>, Generator<Output, void, void>>
			>
		>,
	) =>
	(
		asyncIterator: Unary<
			IsomorphicIterable<Iterable2Item>,
			Unary<
				IsomorphicIterable<Iterable1Item>,
				Function<
					ReadOnlyArray<never>,
					AsyncGenerator<Output, void, void>
				>
			>
		>,
	) =>
		(iterable2 => {
			const asyncGenerator2 = asyncIterator(iterable2);

			if (isAsyncIterable(iterable2)) {
				return iterable1 =>
					createIterableIterator(asyncGenerator2(iterable1));
			} else {
				const generator2 = iterator(iterable2);

				return iterable1 =>
					createIterableIterator(
						isAsyncIterable(iterable1) ?
							asyncGenerator2(iterable1)
						:	generator2(iterable1),
					);
			}
		}) as <Iterable2 extends IsomorphicIterable<Iterable2Item>>(
			iterable2: Iterable2,
		) => <Iterable1 extends IsomorphicIterable<Iterable1Item>>(
			iterable1: Iterable1,
		) => Iterable2 extends ReadOnlyAsyncIterable<Iterable2Item> ?
			ReadOnlyAsyncIterableIterator<Output>
		: Iterable1 extends ReadOnlyAsyncIterable<Iterable1Item> ?
			ReadOnlyAsyncIterableIterator<Output>
		:	ReadOnlyIterableIterator<Output>;
