import { isFalsy } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Falsy` value.
 *
 * @category Conditions
 */
export const whenIsFalsy = when(isFalsy);
