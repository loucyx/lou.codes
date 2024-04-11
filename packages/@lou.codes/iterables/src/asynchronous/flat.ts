import { isIsomorphicIterable } from "@lou.codes/predicates";
import type { IsomorphicIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Flattens one level of the given iterable or asynchronous iterable.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to flatten.
 * @returns Iterable with flatten items.
 */
export const flat = <Iterable extends IsomorphicIterable>(iterable: Iterable) =>
	createIterableIterator(async function* () {
		// eslint-disable-next-line functional/no-loop-statements
		for await (const iterableOrItem of iterable as AsyncIterable<unknown>) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			isIsomorphicIterable(iterableOrItem) ?
				yield* iterableOrItem
			:	yield iterableOrItem;
		}
	}) as Iterable extends IsomorphicIterable<infer Item> ?
		Readonly<
			Item extends IsomorphicIterable<infer SubItem> ?
				AsyncIterableIterator<SubItem>
			:	AsyncIterableIterator<Item>
		>
	:	never;
