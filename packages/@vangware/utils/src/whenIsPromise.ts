import { isPromise } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Promise`.
 *
 * @category Conditions
 */
export const whenIsPromise = when(isPromise);
