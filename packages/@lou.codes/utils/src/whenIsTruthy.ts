import { isTruthy } from "@lou.codes/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Truthy` value.
 *
 * @category Conditions
 */
export const whenIsTruthy = when(isTruthy);
