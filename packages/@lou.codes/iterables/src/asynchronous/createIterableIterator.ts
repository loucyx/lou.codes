import { freeze } from "@lou.codes/constants/Object.js";
import { asyncIterator, iterator } from "@lou.codes/constants/Symbol.js";
import { isIterable } from "@lou.codes/predicates";
import type { Function, IsomorphicIterator, ReadOnly } from "@lou.codes/types";

/**
 * Takes a generator function and returns an iterable iterator or asynchronous
 * iterable iterator object.
 *
 * @category Asynchronous Common
 * @example
 * ```typescript
 * const identityGenerator = function* (value) { yield value; };
 * const iterableIterator = createIterableIterator(identityGenerator);
 *
 * const fooIdentity = iterableIterator("foo");
 *
 * for (const value of fooIdentity) {
 * 	console.log(value); // "foo"
 * }
 *
 * // Same IterableIterator as above, return values again:
 *
 * for (const value of fooIdentity) {
 * 	console.log(value); // "foo"
 * }
 * ```
 * @param generatorFunction Generator to be used every time `[Symbol.iterator]` is called.
 * @returns Iterable iterator object.
 */
export const createIterableIterator = <
	GeneratorFunction extends () => IsomorphicIterator,
>(
	generatorFunction: GeneratorFunction,
) => {
	const generator = generatorFunction();

	return freeze({
		...generator,
		[isIterable(generator) ? iterator : asyncIterator]: generatorFunction,
	}) as GeneratorFunction extends () => IsomorphicIterator<infer Item> ?
		ReadOnly<
			GeneratorFunction extends Function<never, AsyncIterator<Item>> ?
				AsyncIterableIterator<Item>
			:	IterableIterator<Item>
		>
	:	never;
};
