/**
 * Types to represent numbers.
 *
 * @category Number
 * @remarks
 * The `Numeric` type is a union of `number` and `bigint`. It is useful for cases
 * where a value could be either a regular JavaScript number or a BigInt.
 * @example
 * ```typescript
 * const numericNumber: Numeric = 42;
 * const numericBigInt: Numeric = 42n;
 * ```
 */
export type Numeric = bigint | number;
