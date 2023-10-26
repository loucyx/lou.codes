import { construct } from "./construct.js";

/**
 * Functional alias for `new WeakMap()`.
 *
 * @category Classes
 */
export const constructWeakMap = construct(WeakMap) as <
	Key extends object,
	Value,
>(
	iterable?: Iterable<readonly [Key, Value]>,
	// eslint-disable-next-line functional/prefer-readonly-type
) => WeakMap<Key, Value>;
