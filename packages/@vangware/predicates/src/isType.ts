import type { TypeOfDictionary, TypeOfValue } from "@vangware/types";

/**
 * Takes a `type` string and checks if given `input` is of that `typeof`. This
 * "patches" typeof so `null` is not `"object"` but `"null"` instead (rejected
 * proposal for lack of backwards compatibility, more details
 * [here](http://luke.sh/null-typeof)).
 *
 * @category Predicates
 * @example
 * ```typescript
 * const isString = isType("string");
 *
 * isString("value"); // true
 * isString(1); // false
 * ```
 * @returns Curried function with `type` in context that returns `true` if
 * `input` is of `typeof` `type`, `false` otherwise.
 */
export const isType =
	<Type extends TypeOfValue>(type: Type) =>
	(input: unknown): input is TypeOfDictionary[Type] =>
		// eslint-disable-next-line no-null/no-null
		(input === null ? "null" : typeof input) === type;
