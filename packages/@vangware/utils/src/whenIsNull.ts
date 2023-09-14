import { isNull } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is `null`.
 *
 * @category Conditions
 */
export const whenIsNull = when(isNull);
