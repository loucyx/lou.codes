import { isNumber } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Number`.
 *
 * @category Conditions
 */
export const whenIsNumber = when(isNumber);
