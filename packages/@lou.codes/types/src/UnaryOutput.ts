import type { Unary } from "./Unary.js";

/**
 * {@link Unary} function output type.
 *
 * @category Function
 * @remarks
 * This type is used to get the output type of a {@link Unary} function.
 * @example
 * ```typescript
 * const unary: Unary<number, string> = number => `${number}`;
 * UnaryOutput<typeof unary> // `string`
 * ```
 * @see {@link Unary}
 *
 * @template UnaryFunction Type of the unary function to get the output type of.
 */
export type UnaryOutput<UnaryFunction extends Unary<never, unknown>> =
	UnaryFunction extends Unary<infer _Input, infer Output> ? Output : never;
