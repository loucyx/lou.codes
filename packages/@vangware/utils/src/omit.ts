import type { ReadOnlyArray, ReadOnlyRecord } from "@vangware/types";
import { entryKey } from "./entryKey.js";

/**
 * Omits given properties from an object.
 *
 * @category Objects
 * @example
 * ```typescript
 * const object = { a: 1, b: 2, c: 3 };
 * const omitAC = omit("a", "c");
 * const result = omitAC(object); // { b: 2 }
 * ```
 * @param properties Properties to omit.
 * @returns Curried function with `properties` in context.
 */
export const omit =
	<Properties extends ReadOnlyArray<PropertyKey>>(
		...properties: Properties
	) =>
	<Source extends ReadOnlyRecord>(object: Source) =>
		Object.fromEntries(
			Object.entries(object).filter(
				entry => !properties.includes(entryKey(entry)),
			),
		) as Omit<Source, Properties[number]>;
