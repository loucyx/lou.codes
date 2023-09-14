import type { IsomorphicIterable } from "@vangware/types";
import { append } from "./append.js";

/**
 * Prepends one iterable or asynchronous iterable to another.
 *
 * @category Generators
 * @example
 * ```typescript
 * const prependNumbers = prepend([0, 1, 2, 3, 4]);
 * prependNumbers(["foo", "bar"]); // [0, 1, 2, 3, 4, "foo", "bar"]
 * ```
 * @param initialIterable Iterable to be appended.
 * @returns Curried generator function with `initialIterable` set in context.
 */
export const prepend =
	<InitialIterable extends IsomorphicIterable>(
		initialIterable: InitialIterable,
	) =>
	<TailIterable extends IsomorphicIterable>(tailIterable: TailIterable) =>
		append(tailIterable)(initialIterable);
