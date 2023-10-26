import { isUndefined } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is `undefined`.
 *
 * @category Conditions
 */
export const whenIsUndefined = when(isUndefined);
