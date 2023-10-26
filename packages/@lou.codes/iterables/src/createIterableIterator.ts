import {
	asyncIteratorSymbol,
	isIterable,
	iteratorSymbol,
} from "@lou.codes/predicates";
import type { Function } from "@lou.codes/types";
import type { IsomorphicGeneratorFunction } from "./types/IsomorphicGeneratorFunction.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyAsyncIterator } from "./types/ReadOnlyAsyncIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Takes a generator function and returns an iterable iterator or asynchronous
 * iterable iterator object.
 *
 * @category Common
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
	GeneratorFunction extends IsomorphicGeneratorFunction,
>(
	generatorFunction: GeneratorFunction,
) => {
	const generator = generatorFunction();

	return {
		...generator,
		[isIterable(generator) ? iteratorSymbol : asyncIteratorSymbol]:
			generatorFunction,
	} as GeneratorFunction extends IsomorphicGeneratorFunction<infer Item>
		? GeneratorFunction extends Function<never, ReadOnlyAsyncIterator<Item>>
			? ReadOnlyAsyncIterableIterator<Item>
			: ReadOnlyIterableIterator<Item>
		: never;
};
