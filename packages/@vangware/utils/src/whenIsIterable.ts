import { isIterable } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is an `Iterable`.
 *
 * @category Conditions
 */
export const whenIsIterable = when(isIterable);
