import { is } from "@lou.codes/predicates";
import { ALL_TOKEN } from "./tokens.js";

/**
 * Predicate to check if the given value is `"*"`.
 *
 * @category Predicate
 */
export const isAllToken = is(ALL_TOKEN);
