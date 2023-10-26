import type { Unary } from "./Unary.js";

/**
 * Unary function that returns a `boolean`.
 *
 * @category Function
 * @remarks
 * This type is useful for cases where a function needs to check if a certain
 * condition holds for an input value.
 * @example
 * ```typescript
 * const isEven: Filter<number> = number => number % 2 === 0;
 * ```
 * @see {Unary}
 *
 * @template Input The type of the input value.
 * @param input The input value to check.
 * @returns A boolean representing the truthiness of the given filter.
 */
export type Filter<Input> = Unary<Input, boolean>;
