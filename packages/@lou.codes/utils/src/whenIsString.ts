import { isString } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `String`.
 *
 * @category Conditions
 */
export const whenIsString = when(isString);
