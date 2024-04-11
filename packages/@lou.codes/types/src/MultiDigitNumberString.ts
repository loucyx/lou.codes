/**
 * String with more than 1 number on it.
 *
 * @category Number
 * @category String
 * @remarks
 * This type is useful when a given string will need more than one number on it.
 * @example
 * ```typescript
 * const test1: MultiDigitNumberString = "01"; // ok
 * const test2: MultiDigitNumberString = "1"; // error
 * ```
 */
export type MultiDigitNumberString = `${bigint}${bigint}`;
