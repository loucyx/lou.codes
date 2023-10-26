/**
 * Entry couple `[key, value]`.
 *
 * @category Array
 * @category Object
 * @remarks
 * It is a tuple of two elements, the first one being the key and the second one
 * being the value of an object's property.
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["🟢", 1];
 * ```
 *
 * @template Key Object's properties type.
 * @template Value Object's values type.
 */
export type Entry<Key = PropertyKey, Value = unknown> = readonly [
	key: Key,
	value: Value,
];
