import type { Unary } from "./Unary.js";

/**
 * {@link Unary} function input type.
 *
 * @category Function
 * @remarks
 * This type is used to get the input type of a {@link Unary} function.
 * @example
 * ```typescript
 * const unary: Unary<number, string> = number => `${number}`;
 * UnaryInput<typeof unary> // `number`
 * ```
 * @see {@link Unary}
 *
 * @template UnaryFunction Type of the unary function to get the input type of.
 */
export type UnaryInput<UnaryFunction extends Unary<never, unknown>> =
	UnaryFunction extends Unary<infer Input, infer _Output> ? Input : never;
