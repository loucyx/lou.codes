import { isBigInt } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `BigInt`.
 *
 * @category Conditions
 */
export const whenIsBigInt = when(isBigInt);
