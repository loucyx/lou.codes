import { isSafeInteger } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when a number is a `SafeInteger`.
 *
 * @category Conditions
 */
export const whenIsSafeInteger = when(isSafeInteger);
