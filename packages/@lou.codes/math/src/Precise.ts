import type { MaybeInfinity } from "./MaybeInfinity.js";

/**
 * Type to precisely represent a number as a tuple `[base, exponent]`.
 * It can be `[Infinity]`.
 *
 * @category Internal
 */
export type Precise = readonly [base: MaybeInfinity, exponent?: bigint];
