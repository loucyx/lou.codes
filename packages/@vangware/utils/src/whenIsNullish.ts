import { isNullish } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Nullish` value.
 *
 * @category Conditions
 */
export const whenIsNullish = when(isNullish);
