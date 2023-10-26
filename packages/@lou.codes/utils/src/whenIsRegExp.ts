import { isRegExp } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `RegExp`.
 *
 * @category Conditions
 */
export const whenIsRegExp = when(isRegExp);
