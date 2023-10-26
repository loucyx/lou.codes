import { isBigInt } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `BigInt`.
 *
 * @category Conditions
 */
export const whenIsBigInt = when(isBigInt);
