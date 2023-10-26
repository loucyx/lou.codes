import type { Range } from "./Range.js";

/**
 * Valid radix values (from `2` to `36`).
 *
 * @category Number
 * @remarks
 * The `Radix` type is useful when working with number bases other than decimal.
 * The radix defines the base of the number system being used. For example, a
 * binary system has a radix of `2`, a decimal system has a radix of `10`, and a
 * hexadecimal system has a radix of `16`. The `Radix` type can be used to
 * ensure that a given radix value is within the valid range of `2` to `36`.
 * @example
 * ```typescript
 * const binary: Radix = 2;
 * const decimal: Radix = 10;
 * const hexadecimal: Radix = 16;
 * ```
 * @see {@link Range}
 */
export type Radix = Range<2, 36>;
