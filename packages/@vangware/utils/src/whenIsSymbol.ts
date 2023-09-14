import { isSymbol } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Symbol`.
 *
 * @category Conditions
 */
export const whenIsSymbol = when(isSymbol);
