import type { ReadOnlyRecord } from "@vangware/types";

/**
 * Check if the given key is present in the given object (not inherited).
 *
 * @category Predicates
 * @category Objects
 * @example
 * ```typescript
 * const isPropertyOfFoo = isPropertyOf({ "🟢": "🟩" });
 * isPropertyOfFoo("🟢"); // true
 * isPropertyOfFoo("🟩"); // false
 * ```
 * @param object Object to check.
 * @returns Curried function with `context` set.
 */
export const isPropertyOf =
	<Key extends PropertyKey>(object: ReadOnlyRecord<Key>) =>
	(key: Key) =>
		// TODO: Change with `Object.hasOwn(object, key);` once is supported by TypeScript
		// eslint-disable-next-line, functional/no-conditional-statement
		Object.prototype.hasOwnProperty.call(object, key);
