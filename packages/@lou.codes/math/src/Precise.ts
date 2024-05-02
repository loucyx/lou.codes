/**
 * Type to precisely represent a number as a tuple `[base, exponent]`.
 *
 * @category Internal
 */
export type Precise = readonly [base: bigint, exponent?: bigint];
