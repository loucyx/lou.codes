import type { Entry, ReadOnlyRecord } from "@vangware/types";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Yields all entries of an object (including symbols).
 *
 * @category Generators
 * @example
 * ```typescript
 * const entries = objectEntries({ a: 1, b: 2 });
 * entries.next(); // { value: ["a", 1], done: false }
 * entries.next(); // { value: ["b", 2], done: false }
 * entries.next(); // { value: undefined, done: true }
 * ```
 * @param input Object to get entries from.
 * @returns Iterable with entries of the given object (including symbols).
 */
export const objectToEntries = <Key extends PropertyKey, Value>(
	input: ReadOnlyRecord<Key, Value>,
) =>
	createIterableIterator(function* () {
		// eslint-disable-next-line functional/no-loop-statements
		for (const key in input) {
			// eslint-disable-next-line functional/no-conditional-statements
			if (Object.hasOwn(input, key)) {
				yield [key, input[key]] as Entry<
					Extract<keyof ReadOnlyRecord<Key, Value>, string>,
					Value
				>;
			}
		}

		// eslint-disable-next-line functional/no-loop-statements
		for (const symbolKey of Object.getOwnPropertySymbols(input)) {
			yield [
				symbolKey as Key,
				input[symbolKey as keyof ReadOnlyRecord<Key, Value>],
			] as Entry<Key, Value>;
		}
	});
