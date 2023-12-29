import { freeze } from "@lou.codes/constants";
import { iteratorSymbol } from "@lou.codes/predicates";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";
import type { ReadOnlyIterator } from "./types/ReadOnlyIterator.js";

/**
 * Takes a generator function and returns an iterable iterator object.
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
export const createIterableIterator = <Item>(
	generatorFunction: () => ReadOnlyIterator<Item>,
) => {
	const generator = generatorFunction();

	return freeze({
		...generator,
		[iteratorSymbol]: generatorFunction,
	}) as ReadOnlyIterableIterator<Item>;
};
