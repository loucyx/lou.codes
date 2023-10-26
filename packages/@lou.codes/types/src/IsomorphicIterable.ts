import type { ReadOnly } from "./ReadOnly.js";

/**
 * Value might be an `AsyncIterable` or just an `Iterable`.
 *
 * @category Iterables
 * @remarks
 * Union type useful when you want to accept both `AsyncIterable` and `Iterable`
 * values, which is generally in asynchronous functions that can loop over
 * [@@asyncIterator](https://mdn.io/Symbol.asyncIterator) or
 * [@@iterator](https://mdn.io/Symbol.iterator) values.
 * @example
 * ```typescript
 * const iterable: IsomorphicIterable<number> = [1, 2, 3];
 *
 * for (const item of iterable) {
 * 	console.log(item); // Works
 * }
 *
 * for await (const item of iterable) {
 * 	console.log(item); // Also works
 * }
 * ```
 * @see [@@iterator](https://mdn.io/Symbol.iterator)
 * @see [@@asyncIterator](https://mdn.io/Symbol.asyncIterator)
 *
 * @template Item Type of the items in the iterable.
 */
export type IsomorphicIterable<Item = unknown> = ReadOnly<
	AsyncIterable<Item> | Iterable<Item>
>;
