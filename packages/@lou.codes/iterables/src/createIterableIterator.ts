import { freeze } from "@lou.codes/constants/Object.js";
import { iterator } from "@lou.codes/constants/Symbol.js";
import type {
	ReadOnlyIterableIterator,
	ReadOnlyIterator,
} from "@lou.codes/types";

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
		[iterator]: generatorFunction,
	}) as ReadOnlyIterableIterator<Item>;
};
