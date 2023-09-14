import { isUndefined } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is `undefined`.
 *
 * @category Conditions
 */
export const whenIsUndefined = when(isUndefined);
