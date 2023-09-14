import type { ReadOnlyArray, ReadOnlyRecord } from "@vangware/types";
import { entryKey } from "./entryKey.js";

/**
 * Picks given properties from an object.
 *
 * @category Objects
 * @example
 * ```typescript
 * const object = { a: 1, b: 2, c: 3 };
 * const pickAC = pick("a", "c");
 * const result = pickAC(object); // { a: 1, c: 3 }
 * ```
 * @param properties Properties to pick.
 * @returns Curried function with `properties` in context.
 */
export const pick =
	<Properties extends ReadOnlyArray<PropertyKey>>(
		...properties: Properties
	) =>
	<Source extends ReadOnlyRecord>(object: Source) =>
		Object.fromEntries(
			Object.entries(object).filter(entry =>
				properties.includes(entryKey(entry)),
			),
		) as Pick<Source, Properties[number]>;
