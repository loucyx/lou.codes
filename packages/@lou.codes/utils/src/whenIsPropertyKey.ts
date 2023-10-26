import { isPropertyKey } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `PropertyKey`.
 *
 * @category Conditions
 */
export const whenIsPropertyKey = when(isPropertyKey);
