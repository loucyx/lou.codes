import { isNullish } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Nullish` value.
 *
 * @category Conditions
 */
export const whenIsNullish = when(isNullish);
