import type { Function } from "./Function.js";
import type { Single } from "./Single.js";

/**
 * Unary function.
 *
 * @category Function
 * @remarks
 * Type to represent a function that takes a single argument, ideal for currying.
 * @example
 * ```typescript
 * const unary: Unary<number, number> = number => number + 1;
 * ```
 * @see {@link Function}
 * @see {@link Single}
 *
 * @template Input Type of the input value.
 * @template Output Type of the output value.
 */
export type Unary<Input, Output> = Function<Single<Input>, Output>;
