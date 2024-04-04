import type { Unbound } from "@lou.codes/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Set()`.
 *
 * @category Classes
 */
export const constructSet = construct(Set) as <Value>(
	iterable?: Iterable<Value>,
	// eslint-disable-next-line functional/prefer-readonly-type
) => Unbound<Set<Value>>;
