import { isIterable } from "@lou.codes/predicates";
import type { IsomorphicIterator } from "@lou.codes/types";
import { setIterator } from "../setIterator.js";
import { setAsyncIterator } from "./setAsyncIterator.js";

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

	return (isIterable(generator) ? setIterator : setAsyncIterator)(
		generatorFunction,
	)(generator) as unknown as GeneratorFunction extends (
		() => IsomorphicIterator<infer Item>
	) ?
		Readonly<
			GeneratorFunction extends (
				(..._arguments: infer _Arguments) => AsyncIterator<Item>
			) ?
				AsyncIterableIterator<Item>
			:	IterableIterator<Item>
		>
	:	never;
};
