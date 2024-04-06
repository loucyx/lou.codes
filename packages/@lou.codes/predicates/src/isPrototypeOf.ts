import { getPrototypeOf } from "@lou.codes/constants/Object.js";
import type { Class } from "@lou.codes/types";

/**
 * Checks if given `input`'s prototype comes directly from given `constructor`.
 *
 * @category Predicates
 * @category Objects
 * @example
 * ```typescript
 * const isPrototypeOfObject = isPrototypeOf(Object);
 * isPrototypeOfObject({}); // true
 * isPrototypeOfObject(/./); // false
 * ```
 * @param constructor Constructor to check.
 * @returns Returns a curried function with `constructor` in context.
 */
export const isPrototypeOf =
	<Constructor extends Class>(constructor: Constructor) =>
	<Input extends object>(object: Input) =>
		constructor.prototype === getPrototypeOf(object);
