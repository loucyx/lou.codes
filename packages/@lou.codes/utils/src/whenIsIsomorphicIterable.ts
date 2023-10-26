import { isIsomorphicIterable } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for when something is an `AsynchronousIterable`.
 *
 * @category Conditions
 */
export const whenIsIsomorphicIterable = when(isIsomorphicIterable);
