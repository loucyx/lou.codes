import { isAsyncIterable } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is an `AsyncIterable`.
 *
 * @category Conditions
 */
export const whenIsAsyncIterable = when(isAsyncIterable);
